import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Project extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Developer'}]})
    developers: Types.ObjectId
}
export const ProjectSchema = SchemaFactory.createForClass(Project);