import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: String })
  imageUrl: string;

  @Prop({ type: Number })
  quantity: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
