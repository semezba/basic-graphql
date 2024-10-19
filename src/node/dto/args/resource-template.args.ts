import { ObjectType, Field, ID } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class ResourceTemplate {
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
  schema?: any;

  @Field({ nullable: true })
  integrationId?: string;

  @Field({ nullable: true })
  functionString?: string;

  @Field({ nullable: true })
  key?: string;
}
