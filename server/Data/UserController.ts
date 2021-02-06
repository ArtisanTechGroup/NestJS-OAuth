import {
  Controller,
  Get,
  Body,
  Param,
  Put,
  Req,
  HttpService,
} from '@nestjs/common';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Biz/IUserService';
import { UserMessage } from '../Web/UserMessage';
import { IUser } from '../Model/IUser';
import { GitHubUserMessage } from '../Web/GitHubUserDataMessage';
import { Request, Response } from 'express';
import { request } from 'https';

@Controller('user')
export class UserController {
  constructor(
    //private readonly formService: UserService,
    private readonly httpService: HttpService
  ) {}

  @Get('signin/callback')
  async getUser() {
    const response = await this.httpService
      .get(
        'https://github.com/login/oauth/authorize?client_id=1e743fa5e24492690d6a'
      )
      .toPromise();
    console.log(response.data);
    return response.data;
    // const user = this.formService.getUser();
    // return new UserMessage(user);
  }

  // @Put(':id')
  // updateUser(@Body() createUser: IUser, @Param('id') id: string): UserMessage {
  //   const updatedUser = this.formService.updateUser(id, createUser);
  //   return new UserMessage(updatedUser);
  // }
}