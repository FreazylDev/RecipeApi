import { Document, Types, Model } from "mongoose";
import { type BodyContents } from "./contents.Recipe.js";
interface IRecipe extends Document {
    _id: Types.ObjectId;
    author: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    body: {
        title: string;
        frontImage: string;
        ingredients: string[];
        contents: BodyContents[];
        tags: string[];
    };
}
export declare const Recipe: Model<IRecipe>;
export {};
//# sourceMappingURL=Recipe.d.ts.map