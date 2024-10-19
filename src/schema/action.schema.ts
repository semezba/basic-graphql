import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Action extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  functionString: string;

  @Prop({ type: String })
  resourceTemplateId: string;
}

export const ActionSchema = SchemaFactory.createForClass(Action);
