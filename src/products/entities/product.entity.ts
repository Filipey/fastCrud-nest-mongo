import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  sku: string;

  @Prop()
  name: string;

  @Prop()
  gMan: string;

  @Prop()
  inventory: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
