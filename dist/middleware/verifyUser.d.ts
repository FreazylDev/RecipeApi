import type { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}
export declare const verifyRefreshToken: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=verifyUser.d.ts.map