import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Address {
    @Prop()
    street: string;

    @Prop()
    city: string;
}