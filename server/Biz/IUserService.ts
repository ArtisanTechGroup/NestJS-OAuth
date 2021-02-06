import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '../Model/IUser';
import { MockUser } from '../Model/MockUser';

@Injectable()
export class UserService {
  private userObject: IUser;

  constructor() {
    this.userObject = MockUser;
  }

  getUser(id: string): IUser {
    const user = this.findUser(id);
    return user;
  }

  updateUser(id: string, updatedUser: IUser): IUser {
    const user = this.findUser(id);
    const newUserData = { ...user, ...updatedUser };
    return newUserData;
  }

  private findUser(id: string): IUser {
    const user = this.userObject;
    if (!user) {
      throw new NotFoundException('Could not find user');
    }
    return user;
  }
}
