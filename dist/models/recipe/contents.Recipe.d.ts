import mongoose from "mongoose";
export interface BodyContents {
    type: "image" | "paragraph";
    content: string | string[];
}
export declare const bodyContentstSchema: mongoose.Schema<BodyContents, mongoose.Model<BodyContents, any, any, any, mongoose.Document<unknown, any, BodyContents, any, {}> & BodyContents & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, BodyContents, mongoose.Document<unknown, {}, mongoose.FlatRecord<BodyContents>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<BodyContents> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=contents.Recipe.d.ts.map