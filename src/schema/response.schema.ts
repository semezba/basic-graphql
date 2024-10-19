import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
class ResponseVariation {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  responses: any;
}

@Schema()
class ResponseLocaleGroup {
  @Prop({ type: String })
  localeGroupId: string;

  @Prop({ type: [ResponseVariation] })
  variations: ResponseVariation[];
}

@Schema()
class ResponsePlatform {
  @Prop({ type: String })
  integrationId: string;

  @Prop({ type: Number })
  build: number;

  @Prop({ type: [ResponseLocaleGroup] })
  localeGroups: ResponseLocaleGroup[];
}

@Schema({ timestamps: true, collection: 'responses' })
export class Response extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: [ResponsePlatform] })
  platforms: ResponsePlatform[];
}

export const ResponseSchema = SchemaFactory.createForClass(Response);
