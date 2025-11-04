import mongoose from "mongoose";
export const bodyContentstSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["image", "paragraph"],
        required: true
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});
//# sourceMappingURL=contents.Recipe.js.map