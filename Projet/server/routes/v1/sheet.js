import sheetRepository from "../../persistence/sheet-repository.js";
import express from 'express';

const router = express.Router();

router.get('/sheets', async (req, res, next) => {
    try {
        const sheets = await sheetRepository.findSheets();
        res.json(sheets);
    } catch (error) {
        next(error);
    }
});

export default router;