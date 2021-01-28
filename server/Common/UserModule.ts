import { Module } from '@nestjs/common';
import { UserController } from '../Data/UserController';
import { UserService } from '../Data/IUserDao';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
