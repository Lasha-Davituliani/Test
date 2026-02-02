import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { time } from 'console';
import mongoose from 'mongoose';
import { ref } from 'process';
import { Post } from 'src/posts/schema/post.schema';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String })
  firstName: string;
  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'post', default: [] })
  posts: mongoose.Schema.Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
