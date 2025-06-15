import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Tag {
    @Prop()
    name: string;
}