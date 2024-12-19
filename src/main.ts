import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('My Pet Monster')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('monster')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: 'https://my-monster-client.vercel.app', // Укажите ваш клиентский домен
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
    credentials: true, // Разрешить отправку куки
  });
  const prismaService = app.get(PrismaService);
  await app.enableShutdownHooks();

  await app.listen(process.env.PORT ?? 4200);
}
bootstrap();
