import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { User } from "../models/user/User.js";
import { TokenService } from "../services/TokenService.js";

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}


export const verifyRefreshToken = async (req: Request, res: Response, next: NextFunction) => {
    const user = await TokenService.verifyUser(req.headers.authorization);
    console.log(user);
    next();
}