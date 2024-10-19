import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Trigger } from './triggers.args';
import GraphQLJSON from 'graphql-type-json';
import { Action } from './actions.args';
import { Response } from './response.args';

@ObjectType()
export class NodeArgs {
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
  parents?: any[];

  @Field(() => [ID], { nullable: true })
  parentIds?: string[];

  @Field(() => Boolean)
  root: boolean;

  @Field(() => Trigger, { nullable: true })
  trigger?: Trigger;

  @Field(() => [Response], { nullable: 'itemsAndList' })
  responses?: Response[];

  @Field(() => [Action], { nullable: true })
  actions?: Action[];

  @Field(() => Float, { nullable: true })
  priority?: number;

  @Field(() => ID, { nullable: true })
  compositeId?: string;

  @Field(() => Boolean)
  global: boolean;

  @Field({ nullable: true })
  colour?: string;
}
