import { type Request, type Response } from "express";


export const index = (req: Request, res: Response) => {
    res.send("Home");
}

export const _404 = (req: Request, res: Response) => {
    res.send("404");
}