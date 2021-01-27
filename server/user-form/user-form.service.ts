import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserFormService {
  private readonly userArray: IUser[] = [
    {
      id: '0',
      name: 'Josh',
      email: 'jg@gmail.com',
      blogUrl: 'https://github.blog/author/josh/',
      twitterHandle: '@jg22',
      company: 'Artisan',
      location: 'Kansas City',
      hireable: false,
      bio: 'I am pretty cool',
    },
  ];
  getUser(id: string): IUser {
    const user = this.findUser(id);
    return { ...user };
  }

  updateUser(id: string, updatedUser: IUser): IUser {
    const user = this.findUser(id);
    const newUserData = { ...user, ...updatedUser };
    return newUserData;
  }

  private findUser(id: string) {
    const user = this.userArray.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('Could not find user');
    }
    return user;
  }
}
