import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';
import { config } from './config/config';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [ConfigModule.forRoot({ 
    envFilePath, 
    isGlobal: true,
    load: [config]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
