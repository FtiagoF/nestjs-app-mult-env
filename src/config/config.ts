import { ConfigService } from "@nestjs/config"
const appConfig = new ConfigService();

export const config = () => ({
   app: {
    port: appConfig.get('PORT'),
    isDevelopment: appConfig.get('ENVIRONMENT') === 'development' 
   },
   database: {
    host: appConfig.get('DATABASE_HOST'),
    port: appConfig.get('DATABASE_PORT')
   }
});