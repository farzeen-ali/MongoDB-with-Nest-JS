import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Developer extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Project'}]})
    projects: Types.ObjectId
}
export const DeveloperSchema = SchemaFactory.createForClass(Developer);