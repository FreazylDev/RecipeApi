import { Model, Types, Document } from "mongoose";
import type { UserData } from "../../controller/api/auth/api.auth.controller.js";
export interface IUser extends Document {
    _id: Types.ObjectId;
    username: string;
    phoneNumber: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    activated: boolean;
}
interface IUserModel extends Model<IUser> {
    login(userData: UserData): Promise<IUser>;
}
export declare const User: IUserModel;
export {};
//# sourceMappingURL=User.d.ts.map