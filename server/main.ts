import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './Config/Configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: `${config.uri}`,
  });
  app.setGlobalPrefix('api');
  await app.listen(config.port);
}

bootstrap();
// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
// declare const __non_webpack_require__: NodeRequire;
// const mainModule = __non_webpack_require__.main;
// const moduleFilename = (mainModule && mainModule.filename) || '';
// if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
//   bootstrap().catch((err) => console.error(err));
// }
