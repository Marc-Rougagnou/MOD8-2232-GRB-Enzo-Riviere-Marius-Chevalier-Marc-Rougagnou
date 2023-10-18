import express from 'express';
import commentRepository from '../../persistence/comment-repository.js';

const router = express.Router();

router.get('/comments', async (req, res, next) => {
    try {
        const comments = await commentRepository.findComments();
        res.json({comments});
    } catch (error) {
        next(error);
    }
});

router.get('/comments/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const comment = await commentRepository.findComment(id);
        if (comment) {
            res.json({comment});
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
});

router.post('/comments', async (req, res, next) => {
    try {

        const id_user = req.body.id_user;
        const id_sheet = req.body.id_sheet;
        const text = req.body.comment;

        const comment = await commentRepository.createComment(id_user, id_sheet, text);
        res.status(201).json({comment});
    } catch (error) {
        next(error);
    }
});

router.delete('/comments/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const deleted =await commentRepository.deleteComment(id);
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