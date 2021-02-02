import { Controller, Get, Body, Param, Put } from '@nestjs/common';
import { UserService } from './IUserDao';
import { IUser } from '../Model/IUser';
import { User } from '../Model/IUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly formService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): IUser {
    const user = this.formService.getUser(id);
    return { ...user };
  }

  @Put(':id')
  updateUser(@Body() createUserDto: User, @Param('id') id: string): IUser {
    console.log(createUserDto, 'user dto');
    const updatedUser = this.formService.updateUser(id, createUserDto);
    console.log(updatedUser, 'updated user');
    return { ...updatedUser };
  }
}
