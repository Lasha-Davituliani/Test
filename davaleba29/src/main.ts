import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const swagerConfig = new DocumentBuilder()
  .setTitle("Auth with nest js")
  .setDescription("Auth description")
  .setVersion("1.0.0")
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app,swagerConfig)
  SwaggerModule.setup("api",app,document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
