import sheetRepository from "../../persistence/sheet-repository.js";
import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/sheets', async (req, res, next) => {
    try {
        const sheets = await sheetRepository.findSheets();
        res.json(sheets);
    } catch (error) {
        next(error);
    }
});

router.get('/sheets/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const sheet = await sheetRepository.findSheet(id);
        if (sheet) {
            res.json(sheet);
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
});


router.post('/sheets', async (req, res, next) => {
    try {
        const title = req.body.title;
        const group = req.body.group;
        const instrument = req.body.instrument;
        const difficulty = req.body.difficulty;

        const sheet = await sheetRepository.createSheet(title, group, instrument, difficulty);
        res.status(201).json(sheet);
    } catch (error) {
        next(error);
    }
});

router.delete('/sheets/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const deleted =await sheetRepository.deleteSheet(id);
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

router.patch('/sheets/:id', async (req, res, next) => {
    try {
        const id = Number.parseInt(req.params.id);
        const title = req.body.title;
        const group = req.body.group;
        const instrument = req.body.instrument;
        const difficulty = req.body.difficulty;
        const done = req.body.done;

        const sheet = await sheetRepository.updateSheet(id, title, group, instrument, difficulty, done);
        if (sheet) {
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


export default router;