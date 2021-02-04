import { Controller, Get, Body, Param, Put } from '@nestjs/common';
import { UserService } from '../Biz/IUserService';
import { UserMessage } from '../Web/UserMessage';
import { IUser } from '../Model/IUser';

@Controller('user')
export class UserController {
  constructor(private readonly formService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): UserMessage {
    const user = this.formService.getUser(id);
    return new UserMessage(user);
  }

  @Put(':id')
  updateUser(@Body() createUser: IUser, @Param('id') id: string): UserMessage {
    const updatedUser = this.formService.updateUser(id, createUser);
    return new UserMessage(updatedUser);
  }
}
