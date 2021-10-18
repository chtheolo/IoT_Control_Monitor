import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/login', (req: Request, res: Response) => {
    return res.status(200).send("Hello");
});


export default router;