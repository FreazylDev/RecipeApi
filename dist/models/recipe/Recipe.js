import mongoose, { Document, Types, Model } from "mongoose";
import { bodyContentstSchema } from "./contents.Recipe.js";
const recipeSchema = new mongoose.Schema({
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
                validator: function (arr) {
                    return arr.length > 0;
                },
                message: "no ingredient set"
            }
        },
        contents: {
            type: [bodyContentstSchema],
            required: [true, "no body elements set"],
            validate: {
                validator: function (arr) {
                    return arr.length > 0;
                },
                message: "no body content set"
            }
        },
        tags: {
            type: [String],
            required: [true, "no tags set"],
            validate: {
                validator: function (arr) {
                    return arr.length > 0;
                },
                message: "no tags set"
            }
        }
    }
}, { timestamps: true });
export const Recipe = mongoose.model("recipe", recipeSchema);
//# sourceMappingURL=Recipe.js.map