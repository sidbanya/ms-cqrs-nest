import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  
  const config = new DocumentBuilder()
    .setTitle('Questions example')
    .setDescription('The questions API description')
    .setVersion('1.0')
    .addTag('questions')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  app.listen(3000, () => console.log('Application is listening on port 3000.'));
}
bootstrap();
