import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Schema({
  timestamps: true,
  validateBeforeSave: true,
})
@ObjectType()
export class User extends Document {
  @Prop({
    trim: true,
    maxlength: 32,
  })
  @Field()
  name: string;

  @Prop({
    maxlength: 64,
  })
  @Field()
  email: string;

  @Prop({
    unique: [true, 'Mobile Number must be unique'],
  })
  @Field()
  mobile: string;

  @Prop()
  @Field()
  hashPassword: string;

  @Prop()
  @Field({ nullable: true })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
