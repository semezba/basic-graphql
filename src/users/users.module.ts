import { Module } from '@nestjs/common';
import { UsersResolvers } from './users.resolvers';
import { UsersServices } from './users.services';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersResolvers, UsersServices],
  exports: [UsersServices],
})
export class UsersModule {}
