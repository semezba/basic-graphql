import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  mobile: string;

  @Field()
  @IsNotEmpty()
  hashPassword: string;

  @Field()
  @IsOptional()
  role: string;
}
