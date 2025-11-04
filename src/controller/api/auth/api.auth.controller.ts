import { type Request, type Response } from "express";
import jwt, { type SignOptions, type Secret } from "jsonwebtoken";
import { User } from "../../../models/user/User.js";
import { handleAuthErrors } from "./api.auth.errors.js";
import { TokenService } from "../../../services/TokenService.js";

const ACCESS_TOKEN_EXP = 10 * 60 * 1000; // 10 minutes in ms
const REFRESH_TOKEN_EXP = 30 * 24 * 60 * 60 * 1000; // 30 days in ms
const JWT_SECRET = "123";

export class UserData {
    username: string;
    phoneNumber: string;
    role: string;
    constructor(username: string, phoneNumber: string, role: string) {
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.role = role || "user";
    }
}



export const signup = async (req: Request, res: Response) => {
    console.log(req.headers.bearer);

    const { username, phoneNumber, role } = req.body;
    const userData = new UserData(username, phoneNumber, role);
    try {
        const user = await User.create(userData);

        TokenService.setCookie(res, "refresh_token", {
            id: user._id
        }, "30d");


        res.status(200).json(user);
    } catch (err) {
        err = handleAuthErrors(err);
        res.status(500).json(err);
    }
}

export const login = async (req: Request, res: Response) => {
    const { username, phoneNumber } = req.body;
    const userData = new UserData(username, phoneNumber, "user");
    try {
        const user = await User.login(userData);

        TokenService.setCookie(res, "refresh_token", {
            id: user._id
        }, "30d");

        res.status(201).json(user);
    } catch (err: any) {
        err = handleAuthErrors(err.message);
        res.json(err);
    }
}