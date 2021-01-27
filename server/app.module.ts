import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppServerModule } from '../src/main.server';
import { AppService } from './app.service';
import { UserFormController } from './user-form/user-form.controller';
import { UserFormService } from './user-form/user-form.service';
import { UserFormModule } from './user-form/user-form.module';

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
