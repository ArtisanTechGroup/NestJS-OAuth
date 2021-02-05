import { Controller, Get, Body, Param, Put, Req } from '@nestjs/common';
import { UserService } from '../Biz/IUserService';
import { UserMessage } from '../Web/UserMessage';
import { IUser } from '../Model/IUser';
import { GitHubUserMessage } from '../Web/GitHubUserDataMessage';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly formService: UserService) {}

  @Get('signin/callback')
  getUser(@Param('id') id: string, @Req() req: Request, res: Response): UserMessage {
    const {query} = req;
    const {code} = query;

    const user = this.formService.getUser(id);
    return new UserMessage(user);

    // if(!code) {
    //   return res.send({
    //     query,
    //     code,
    //   });
    // }


    
  }

  @Put(':id')
  updateUser(@Body() createUser: IUser, @Param('id') id: string): UserMessage {
    const updatedUser = this.formService.updateUser(id, createUser);
    return new UserMessage(updatedUser);
  }
}
