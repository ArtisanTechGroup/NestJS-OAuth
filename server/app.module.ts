import { Module, HttpModule } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { UserController } from './Data/UserController';
import { UserService } from './Biz/IUserService';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/NestJS-OAuth/browser'),
    }),
    ConfigModule.forRoot(),
    HttpModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}