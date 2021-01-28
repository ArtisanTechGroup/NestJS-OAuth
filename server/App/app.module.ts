import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppServerModule } from '../src/main.server';
import { AppService } from './app.service';
import { UserFormController } from './Data/UserController';
import { UserFormService } from './Data/IUserDao';
import { UserFormModule } from './Common/UserModule';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/NestJS-OAuth/browser'),
    }),
    UserFormModule,
  ],
  controllers: [AppController, UserFormController],
  providers: [AppService, UserFormService],
})
export class AppModule {}
