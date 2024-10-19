import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Trigger } from './trigger.schema';
import { Action } from './action.schema';

@Schema({ timestamps: true })
export class Node extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'NodeObject' }] })
  parents: Types.ObjectId[];

  @Prop({ type: [String] })
  parentIds: string[];

  @Prop({ default: false })
  root: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trigger',
    required: false,
  })
  trigger: Trigger;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Response',
      required: false,
    },
  ])
  responses: Response[];

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Action',
      required: false,
    },
  ])
  actions: Action[];

  @Prop({ type: Number })
  priority: number;

  @Prop({ type: String })
  compositeId: string;

  @Prop({ default: false })
  global: boolean;

  @Prop()
  colour: string;
}

export const NodeSchema = SchemaFactory.createForClass(Node);
