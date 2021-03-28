import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT) || 3000, process.env.HOST || '0.0.0.0');
  console.log(process.env.PORT)
}
bootstrap();
