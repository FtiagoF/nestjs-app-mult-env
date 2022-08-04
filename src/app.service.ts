import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class AppService {
  constructor(@Inject(ConfigService) public envConfig: ConfigService) {}

  getHello(): string {
    const port: string = this.envConfig.get('PORT');

    console.log(port);

    return 'hello world'
  }
}
