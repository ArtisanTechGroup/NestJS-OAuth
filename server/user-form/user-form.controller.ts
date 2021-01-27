import { Controller, Get, Body, Param, Patch } from '@nestjs/common';
import { UserFormService } from './user-form.service';
import { IUser } from './interfaces/user.interface';
import { UserForm } from './dto/user-form.dto';

@Controller('user')
export class UserFormController {
  constructor(private readonly formService: UserFormService) {}

  @Get(':id')
  getUser(@Param('id') id: string): IUser {
    const user = this.formService.getUser(id);
    return { ...user };
  }

  @Patch(':id')
  updateUser(@Body() createUserDto: UserForm, @Param('id') id: string): IUser {
    const updatedUser = this.formService.updateUser(id, createUserDto);
    return { ...updatedUser };
  }
}
