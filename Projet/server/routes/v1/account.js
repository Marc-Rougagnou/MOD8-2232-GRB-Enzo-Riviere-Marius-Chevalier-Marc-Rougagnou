import express from 'express';
import userRepository from '../../persistence/account-repository.js';

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
        res.status(201).json({user});
    } catch (error) {
        next(error);
    }
});

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
        res.json({user});
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


export default router;