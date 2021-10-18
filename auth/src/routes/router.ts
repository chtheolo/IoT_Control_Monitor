import express, { Application, Request, Response } from 'express';
import Authortization from '../controllers/index';

console.log("router\n");

// Route Groups
const routes = {
    auth: express.Router(),
    api: express.Router()
};

// const Auth = new Authortization();

module.exports = (app: Application) => {
    // app.route('/auth')
    //     .get((req: Request, res: Response) => {
    //         return res.send('Hello');
    //     });
    
    routes.api.use('/auth', routes.auth);
    routes.auth
        .get('/', (req: Request, res: Response) => {
            return res.send('Hello');
        });
        // .post('/register')
        // .post('/authorize')

    app.use('/', routes.api);
};