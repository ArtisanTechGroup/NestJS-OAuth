import { Controller, Get, Body, Param, Patch } from '@nestjs/common';
import { UserService } from './IUserDao';
import { IUser } from '../Model/IUser';
import { User } from '../Model/IUserDto';

// get rid of userform names. just user in the backend
@Controller('user')
export class UserController {
  constructor(private readonly formService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): IUser {
    const user = this.formService.getUser(id);
    return { ...user };
  }

  @Patch(':id')
  updateUser(@Body() createUserDto: User, @Param('id') id: string): IUser {
    const updatedUser = this.formService.updateUser(id, createUserDto);
    return { ...updatedUser };
  }
}
