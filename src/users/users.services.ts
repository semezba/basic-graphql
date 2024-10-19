import { Injectable } from '@nestjs/common';
import { GetUserArgs } from './dto/args/getUser.Args';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from 'src/schema/user';

@Injectable()
export class UsersServices {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    try {
      return await this.userModel.find().exec();
    } catch (error) {
      return error;
    }
  }

  async getUser(getUserArgs: GetUserArgs): Promise<User> {
    try {
      return await this.userModel.findOne({ email: getUserArgs.email }).exec();
    } catch (error) {
      return error;
    }
  }

  async deleteUser(deleteUser: DeleteUserInput): Promise<User> {
    try {
      return await this.userModel
        .findOneAndDelete({ email: deleteUser.email })
        .exec();
    } catch (error) {
      return error;
    }
  }

  async updateUser(updateUser: UpdateUserInput): Promise<User> {
    try {
      const user = await this.userModel
        .findOne({ email: updateUser.email })
        .exec();
      user.name = updateUser.name;
      user.mobile = updateUser.mobile;
      return user.save();
    } catch (error) {
      return error;
    }
  }
}
