import mongoose from "mongoose";

export interface BodyContents {
    type: "image" | "paragraph";
    content: string | string[];
}

export const bodyContentstSchema = new mongoose.Schema<BodyContents>({
    type: {
        type: String,
        enum: ["image", "paragraph"],
        required: true
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})