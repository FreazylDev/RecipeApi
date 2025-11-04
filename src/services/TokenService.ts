import jwt from "jsonwebtoken";
import { type Response } from "express";
import dotenv from "dotenv";
import { Document, Types } from "mongoose";
import { User, type IUser } from "../models/user/User.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_KEY as string;
if (!JWT_SECRET) throw new Error("JWT_KEY not set in .env");

type UserDocument = Document<unknown, {}, IUser> & IUser & { _id: Types.ObjectId };

export class TokenService {
    static setToken(payload: object, expiresIn: number) {
        return jwt.sign(payload, JWT_SECRET, {
            expiresIn 
        })
    }

    static setCookie(res: Response, key: string, payload: object, lengthStr: string) {
        const length = this.calcLength(lengthStr);
        const token = this.setToken(payload, length);
        return res.cookie(key, token, {
            maxAge: length
        })
    }

    private static decodeToken(token: string, checkAdmin = false) {
        const decoded = jwt.verify(token, JWT_SECRET) as { _id: string, role?: string };

        return checkAdmin
            ? { _id: decoded._id, role: decoded.role }
            : { _id: decoded._id };
    }

    static async verifyUser(token: string | undefined, checkAdmin = false): Promise<UserDocument | 401 | null> {
        if (!token?.startsWith("Bearer ") || !token?.split(" ")[1]) {
            return 401;
        }
        token = token.split(" ")[1] as string;
        const decodedToken = this.decodeToken(token, checkAdmin);

        const user = await User.findById(decodedToken._id);
        return user;
    }


    private static calcLength(length: string): number {
        const match = length.match(/^(\d+)([a-zA-Z])$/);
        if (!match) return -1;

        const num = Number(match[1]);
        const unit = match[2]!;

        const multipliers: Record<string, number> = {
            s: 1000,
            m: 1000 * 60,
            h: 1000 * 60 * 60,
            d: 1000 * 60 * 60 * 24
        }

        return multipliers[unit] ? num * multipliers[unit] : -1;
    }
}