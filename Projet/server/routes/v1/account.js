import express from 'express';
import userRepository from '../../persistence/account-repository.js';
import repository from '../../persistence/authentication-repository.js'
import credentialsParser from '../../middleware/credentials-parser.js'
import bcrypt from 'bcrypt'

const router = express.Router();

router.get('/profiles', async (req, res, next) => {
    try {
        const users = await userRepository.findUsers();
        res.status(200).json({users});
    }
    catch (error) {
        next(error);
    }});

router.post('/profiles', async (req, res, next) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const gender = req.body.gender;

        const user = await userRepository.createUser(username, email, password, gender);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});


// POST request handler for /auth/login endpoint
router.post('/profiles/login', credentialsParser, async (req, res, next) => {
    try {
      // The immediately preceding credentials parser middleware validated and parsed the authorization header
      // to extract the scheme and the base-64 encoded username and password, and attached them to the request.
      // As a result, this request handler can get and immediately remove the credentials from the request.
      const requestCredentials = req.credentials
      delete req.credentials
  
    //   await invalidateSession(req, res)
  
    //   const err = validator.validateLogIn(requestCredentials)
    //   if (err) {
    //     res.appendHeader('WWW-Authenticate', 'Basic') // Add response header to inform client of correct authentication scheme
    //     err.status = 401 // Set status to 401 Unauthorized (actually means unauthenticated)
    //     return next(err)
    //   }
  
      const credentials = await repository.findUserCredentials(requestCredentials.username)
      console.log(credentials)
      console.log(repository.findUserCredentials(requestCredentials.username))    
  
      const authenticated = credentials !== null ? await bcrypt.compare(requestCredentials.password, credentials.password) : false
  
      if (!authenticated) {
        res.appendHeader('WWW-Authenticate', 'Basic') // Add response header to inform client of correct authentication scheme
        const err = new Error('Incorrect username or password.')
        err.status = 401 // Set status to 401 Unauthorized (actually means unauthenticated)
        return next(err)
      }
  
      // Authentication succeeded
      // Create a new session and send the session id back to the client in a cookie, along with the authenticated user in the body
  
      const durationMinutes = Number.parseInt(process.env.SESSION_DURATION) || 15 // Extend session by duration specified in .env
      const session = await createSession(credentials.username, durationMinutes)
      const user = await repository.findUser(credentials.username)
  
      // HttpOnly: Forbid client-side scripts from accessing the cookie, to mitigate cross-site scripting (XSS)
      // Secure: Only send cookie to server when request is made with HTTPS, except on localhost, to mitigate man-in-the-middle attacks
      // SameSite=Lax: Cookie is not sent on cross-site requests, except when navigating from external site to origin, to mitigate cross-site request forgery (CSRF)
      // MaxAge, Expires: Do not specify a cookie max age or expiry, in order to create transient session cookie removed when the browser is closed
      const cookieOptions = { httpOnly: true, secure: true, sameSite: 'Lax' }
      res.cookie('session-id', session.id, cookieOptions)
  
      res.status(200).json({ user })
    } catch (err) {
      next(err)
    }
  })


router.patch('/profiles/:id', async (req, res, next) => {
    try {
        const id = Number.parseInt(req.params.id);
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const gender = req.body.gender;

        const user = await userRepository.updateUser(id, username, email, password, gender);
        if (user) {
            res.sendStatus(201)
            // Send 200 response indicating film was successfully deleted
        } 
        else {
            next() // Pass request to next request handler or middleware
        }
    } catch (error) {
        next(error);
    }
});


router.get('/profile/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const user = await userRepository.findUser(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

router.delete('/profile/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const deleted =await userRepository.deleteUser(id);
        if (deleted) {
            res.sendStatus(200)
            // Send 200 response indicating film was successfully deleted
        } 
        else {
            next() // Pass request to next request handler or middleware
        }
    } 
    catch (error) {
        next(error);
    }
});

const createSession = async (username, durationMinutes) => {
    const id = randomUUID().toString()
    const startTime = new Date(Date.now())
    const expiryTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000)
    const session = { id, username, startTime, expiryTime }
  
    return await repository.createSession(session)
  }

export default router;