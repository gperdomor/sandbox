import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { randomUUID } from 'node:crypto';
import { AppModule } from './app/app.module';
import { configure } from './configure';
import { REQUEST_ID_HEADER, SERVICE_NAME } from './constants';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      requestIdHeader: REQUEST_ID_HEADER,
      genReqId: () => randomUUID(),
    }),
    { bufferLogs: true }
  );

  await configure(app);

  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  Logger.log(`🚀 Application ${SERVICE_NAME} is running on: ${await app.getUrl()}`);
}

bootstrap();
