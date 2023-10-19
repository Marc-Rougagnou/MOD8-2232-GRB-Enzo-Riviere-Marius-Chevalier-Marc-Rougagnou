import express from 'express'
import bcrypt from 'bcrypt'
import { randomUUID } from 'crypto'
import credentialsParser from '../../middleware/credentials-parser.js'
import validator from '../../validators/authentication-validator.js'
import repository from '../../persistence/authentication-repository.js'

const router = express.Router()

// POST request handler for /auth/signup endpoint
router.post('/auth/signup', credentialsParser, async (req, res, next) => {
  // The immediately preceding credentials parser middleware validated and parsed the authorization header
  // to decode and extract the base-64 encoded username and password, and attached them to the request.
  // As a result, this request handler can get and immediately remove the credentials from the request.
  const credentials = req.credentials
  delete req.credentials

  try {
    await invalidateSession(req, res)

    const err = validator.validateSignUp(credentials, req.body.name)
    if (err) {
      err.status = 400
      return next(err)
    }

    const username = credentials.username.trim()
    const password = credentials.password
    const name = req.body.name.trim()
    console.log(name)

    await repository.createUser(username, password, name)

    res.status(201).json({ username })
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      const error = new Error(`Username "${credentials.username.trim()}" is not available.`, { cause: err })
      error.status = 409
      next(error)
    } else {
      next(err)
    }
  }
})

// POST request handler for /auth/login endpoint
router.post('/auth/login', credentialsParser, async (req, res, next) => {
  try {
    // The immediately preceding credentials parser middleware validated and parsed the authorization header
    // to extract the scheme and the base-64 encoded username and password, and attached them to the request.
    // As a result, this request handler can get and immediately remove the credentials from the request.
    const requestCredentials = req.credentials
    delete req.credentials

    await invalidateSession(req, res)

    const err = validator.validateLogIn(requestCredentials)
    if (err) {
      res.appendHeader('WWW-Authenticate', 'Basic') // Add response header to inform client of correct authentication scheme
      err.status = 401 // Set status to 401 Unauthorized (actually means unauthenticated)
      return next(err)
    }

    console.log(requestCredentials.username)
    const credentials = await repository.findUserCredentials(requestCredentials.username)

    console.log(requestCredentials.password)
    console.log(credentials.password)
    const authenticated =
      credentials !== null ? await requestCredentials.password == credentials.password : false

    if (!authenticated) {
      res.appendHeader('WWW-Authenticate', 'Basic') // Add response header to inform client of correct authentication scheme
      const err = new Error('Incorrect username or password.')
      err.status = 401 // Set status to 401 Unauthorized (actually means unauthenticated)
      return next(err)
    }

    // Authentication succeeded
    // Create a new session and send the session id back to the client in a cookie, along with the authenticated user in the body

    const durationMinutes = Number.parseInt(process.env.SESSION_DURATION) || 15 // Extend session by duration specified in .env
    const session = await createSession(requestCredentials.username, durationMinutes)
    const user = await repository.findUser(requestCredentials.username)

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

// POST request handler for /auth/logout endpoint
router.post('/auth/logout', async (req, res, next) => {
  try {
    await invalidateSession(req, res) // Delete session if it exists
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.get('/auth/user', (req, res, next) => {
  try {
    if (req.session) {
      const user = req.session.user
      return res.status(200).json({ user })
    }

    const err = new Error('Request unauthenticated.')
    err.status = 401 // Set status to 401 Unauthorized (actually means unauthenticated)
    return next(err) // Pass error to next error handler middleware
  } catch (err) {
    next(err)
  }
})

const createSession = async (username, durationMinutes) => {
  const id = randomUUID().toString()
  const startTime = new Date(Date.now())
  const expiryTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000)
  const session = { id, username, startTime, expiryTime }

  return await repository.createSession(session)
}

const invalidateSession = async (req, res) => {
  delete req.session
  const id = req.cookies['session-id']

  if (id !== undefined) {
    deleteSessionIdCookie(res) // Instruct browser to delete session id cookie
    await repository.deleteSession(id) // Delete session from database if it exists
  }
}

const deleteSessionIdCookie = (res) => {
  // The following built-in method for deleting a cookie doesn't use the required cookie options
  // res.clearCookie('session-id')

  // Manually delete the cookie by setting a past expiry date and empty value, with the required cookie options
  const expires = new Date(0) // January 1, 1970
  const cookieOptions = { expires, httpOnly: true, secure: true, sameSite: 'Lax' }
  res.cookie('session-id', '', cookieOptions) // Instruct browser to delete session id cookie
}

export default router
