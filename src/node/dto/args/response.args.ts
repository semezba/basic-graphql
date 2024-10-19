import { ObjectType, Field, ID } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class Response {
  @Field(() => ID)
  _id: string;

  @Field()
  createdAt: number;

  @Field({ nullable: true })
  updatedAt?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  platforms?: any[];
}
