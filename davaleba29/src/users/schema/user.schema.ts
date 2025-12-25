import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { mongo } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String })
  fullName: string;

  @Prop({ type: String, unique: true })
  email: string;

  @Prop({ type: String, select: false })
  password: string;

  @Prop({ type: String, default: 'USER' })
  role: string;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'post', default: [] })
  posts: mongoose.Schema.Types.ObjectId[];
}
export const userSchema = SchemaFactory.createForClass(User);
