import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'resource_templates' })
export class ResourceTemplate extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Object })
  schema: any;

  @Prop()
  integrationId: string;

  @Prop()
  functionString: string;

  @Prop()
  key: string;
}

export const ResourceTemplateSchema =
  SchemaFactory.createForClass(ResourceTemplate);
