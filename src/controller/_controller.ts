import { type Request, type Response } from "express";


export const index = (req: Request, res: Response) => {
    res.render("index");
}

export const _404 = (req: Request, res: Response) => {
    res.render("404");
}