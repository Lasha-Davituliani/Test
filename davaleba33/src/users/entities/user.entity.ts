import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
    collection: "users",
})
export class User {
    @Prop({ type: String })
    name: string;

    @Prop({ type: String })
    email: string;

    @Prop({ type: Number })
    age: number;
}
export const UserSchema = SchemaFactory.createForClass(User);