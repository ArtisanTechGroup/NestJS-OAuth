import { Module } from '@nestjs/common';
import { UserFormController } from '../Data/UserController';
import { UserFormService } from '../Data/IUserDao';

@Module({
  controllers: [UserFormController],
  providers: [UserFormService],
})
export class UserFormModule {}
