import mongoose, { Model, Types, Document } from "mongoose";
import bcrypt from "bcryptjs";
import { checkPhoneNumber } from "./validate.User.js";
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

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: [true, "username not set"],
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: [true, "phone number not set"],
        unique: true,
        validate: {
            validator: checkPhoneNumber,
            message: "not a valid phone number"
        }
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    activated: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }
)

userSchema.statics.login = async function(userData: UserData) {
    const user = await this.findOne({ username: userData.username });
    if (!user) throw Error("user not found");

    const auth = await bcrypt.compare(userData.phoneNumber, user.phoneNumber);
    if (!auth) throw Error("incorrect phone number");
    return user;
}

userSchema.pre("save", async function(this) {
    const salt = await bcrypt.genSalt();
    this.phoneNumber = await bcrypt.hash(this.phoneNumber, salt);
});


export const User: IUserModel = mongoose.model<IUser, IUserModel>("user", userSchema);