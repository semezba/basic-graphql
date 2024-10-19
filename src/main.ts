import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  let port = 5000;
  await app.listen(port, () => {
    console.log('------------------------------');
    console.log(`App is running on port ${port}`);
    console.log('------------------------------');
  });
}
bootstrap();
