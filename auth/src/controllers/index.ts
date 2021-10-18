import { Request, Response, NextFunction } from "express";

class Authortization {
    // constructor() {

    // };

    // public log_in(req: Request, res: Response, _next: NextFunction): Promise<Response> {
    public async log_in(req: Request, res: Response, _next: NextFunction): Promise<Response> {
        console.log("enter");
        return res.json({
            success: true,
            data: {
                message: 'Login'
            },
            status: 200
        })
    }
}

export default Authortization;