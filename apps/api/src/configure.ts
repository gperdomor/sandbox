import helmet from '@fastify/helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { corsOptions, helmetOptions, validationPipeOptions } from './constants';

const configureOAS = async (app: NestFastifyApplication) => {
  const path = 'docs';

  const config = new DocumentBuilder()
    .setTitle('Sandbox Example App')
    .setDescription('The Sandbox API description')
    .setContact('Gustavo Perdomo', '', 'gperdomor@gmail.com')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(path, app, document);

  Logger.log(`📖 Open API Specification is enabled under /${path} path`, 'Configure');
};

export const configure = async (app: NestFastifyApplication) => {
  app.enableCors(corsOptions);

  await app.register(helmet, helmetOptions);

  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  await configureOAS(app);

  app.enableShutdownHooks();
};
