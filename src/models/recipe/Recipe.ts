import mongoose, { Document, Types, Model } from "mongoose";
import { bodyContentstSchema, type BodyContents } from "./contents.Recipe.js";


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
    }
}

const recipeSchema = new mongoose.Schema<IRecipe>({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "author not set"]
    },
    body: {
        title: {
            type: String,
            required: [true, "recipe title not set"],
            unique: true
        },
        frontImage: {
            type: String,
            unique: true
        },
        ingredients: {
            type: [String],
            required: [true, "no ingredient set"],
            validate: {
                validator: function(arr: string[]) {
                    return arr.length > 0;
                },
                message: "no ingredient set"
            }
        },
        contents: {
            type: [bodyContentstSchema],
            required: [true, "no body elements set"],
            validate: {
                validator: function(arr: string[]) {
                    return arr.length > 0;
                },
                message: "no body content set"
            }
        },
        tags: {
            type: [String],
            required: [true, "no tags set"],
            validate: {
                validator: function(arr: string[]) {
                    return arr.length > 0;
                },
                message: "no tags set"
            }
        }
    }
}, { timestamps: true }
);

export const Recipe: Model<IRecipe> = mongoose.model<IRecipe>("recipe", recipeSchema);