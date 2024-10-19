import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ResourceTemplate } from './resource_template.schema';

@Schema({ timestamps: true })
export class Trigger extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  functionString: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ResourceTemplate',
    required: false,
  })
  resourceTemplateId: ResourceTemplate;
}

export const TriggerSchema = SchemaFactory.createForClass(Trigger);
