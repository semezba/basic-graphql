import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ResourceTemplate } from './resource-template.args';

@ObjectType()
export class Action {
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

  @Field({ nullable: true })
  functionString?: string;

  @Field(() => ResourceTemplate, { nullable: true })
  resourceTemplateId?: ResourceTemplate;
}
