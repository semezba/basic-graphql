import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RegisterInput } from './dto/input/register.input';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/args/login.response';
import { LoginInput } from './dto/input/login.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { User } from 'src/schema/user';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  register(@Args('registerUser') registerUser: RegisterInput): Promise<User> {
    return this.authService.registerUser(registerUser);
  }

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(@Args('loginUser') loginUser: LoginInput): Promise<LoginResponse> {
    return this.authService.login(loginUser);
  }
}
