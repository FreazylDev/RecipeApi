import jwt from "jsonwebtoken";
import { User } from "../models/user/User.js";
import { TokenService } from "../services/TokenService.js";
export const verifyRefreshToken = async (req, res, next) => {
    const user = await TokenService.verifyUser(req.headers.authorization);
    console.log(user);
    next();
};
//# sourceMappingURL=verifyUser.js.map