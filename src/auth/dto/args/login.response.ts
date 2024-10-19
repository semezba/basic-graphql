import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/schema/user';

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;

  @Field(() => User)
  user: User;
}
