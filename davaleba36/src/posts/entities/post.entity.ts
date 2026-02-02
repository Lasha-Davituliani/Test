import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { timestamp } from "rxjs";

@Schema({timestamps:true})
export class Post {
    @Prop({type:String})
    title:string

     @Prop({type:String})
    content:string
}
export const postSchema = SchemaFactory.createForClass(Post)