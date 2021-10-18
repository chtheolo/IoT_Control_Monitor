import { Server } from '../../server/index';
import { Application, Request, Response, NextFunction } from "express";
import * as dotenv from 'dotenv';
dotenv.config();

/**Checking for env variable */
if (!process.env.PORT) {
    console.log("No PORT variable!");
    process.exit(-1);
}

const port: number = parseInt(process.env.PORT as string, 10);

let server = new Server();

server.start(port)
.then((app: Application) => {
    console.log(`Server running in 'http://localhost:${port}`);
    app.use('/test', (req: Request, res: Response, next: NextFunction) => {
        console.log("test");
        return res.status(200).send("ok");
    })
})
.catch(error => {
    return console.error('Error: ', error);
})

module.exports = server;