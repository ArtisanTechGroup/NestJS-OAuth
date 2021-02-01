import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '../Model/IUser';
import { MockUser } from '../Model/MockUser';

@Injectable()
export class UserService {
  userData = MockUser;

  private readonly userObject: IUser = this.userData;
  getUser(id: string): IUser {
    const user = this.findUser(id);
    // need messages or what the data object coming in looks like
    return user;
  }

  updateUser(id: string, updatedUser: IUser): IUser {
    const user = this.findUser(id);
    const newUserData = { ...user, ...updatedUser };
    // need messages or what the data object going out looks like
    return newUserData;
  }

  // convert value from service to message value
  private findUser(id: string): IUser {
    const user = this.userObject;
    if (!user) {
      throw new NotFoundException('Could not find user');
    }
    return user;
  }
}
