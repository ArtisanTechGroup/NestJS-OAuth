import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppServerModule } from '../../src/main.server';
import { AppService } from './app.service';
import { UserController } from '../Data/UserController';
import { UserService } from '../Data/IUserDao';
import { UserModule } from '../Common/UserModule';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/NestJS-OAuth/browser'),
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
