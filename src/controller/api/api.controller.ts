import { type Request, type Response } from "express";


export const test = (req: Request, res: Response) => {
    res.status(200).json({ msg: "API Called!" });
}

export const _404 = (req: Request, res: Response) => {
    res.status(501).json({ msg: "Not a valid API endpoint" });
}