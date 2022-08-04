import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true});

  const appConfig = config().app;
  await app.listen(
    appConfig.port, 
    () => {
    console.log(`${appConfig.isDevelopment ? 'Development' : 'Production'} environment running at ${appConfig.port}`)
  });
}
bootstrap();
