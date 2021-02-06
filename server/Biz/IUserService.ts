import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '../Model/IUser';
import { MockUser } from '../Model/MockUser';

@Injectable()
export class UserService {
  private userObject: IUser;

  constructor() {
    this.userObject = MockUser;
  }

  getUser(): IUser {
    const user = this.findUser();
    return user;
  }

  updateUser(updatedUser: IUser): IUser {
    const user = this.findUser();
    const newUserData = { ...user, ...updatedUser };
    return newUserData;
  }

  private findUser(): IUser {
    const user = this.userObject;
    if (!user) {
      throw new NotFoundException('Could not find user');
    }
    return user;
  }
}
