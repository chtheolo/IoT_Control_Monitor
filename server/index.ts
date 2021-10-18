/**
 * @file        server.ts
 * @repository  - - -
 * @summary     Server Class.
 * @description This file  creates Server objects and contains funciton(s) that initialize a server 
 *              application express.
 * @services  - Server
 * @functions - Constructor(), config(), get_app(), start()
 * @returns   - Returns Server Class objects
 */

/**
 * Required External Modules
 */
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";


export class Server {
    /** Variables */

    /**
     * This is a app variable for express middleware.
     */
    public app: Application;
    // public routePrv: Routes = new Routes();

    /**
     * Constructors
     */
    constructor() {
        this.app = express();
        this.config();
    };

    /**
     * Methods
     */ 
    public async config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    public get_app() {
        return this.app;
    }

    /**
     * @param port number
     * @returns {Application Object}
     */
    public async start(port: number) : Promise<Application> {
        return new Promise((resolve, reject) => {
            let server = this.app.listen(port, ()=> {
                resolve(this.app);
            })
            .on('error', (err: Object) => {
                reject(err);
            });
        });
    };
};
