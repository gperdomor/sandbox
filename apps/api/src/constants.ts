import { FastifyHelmetOptions } from '@fastify/helmet';
import { ValidationPipeOptions } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const SERVICE_NAME = 'dev.gperdomor.sandbox.api';

export const REQUEST_ID_HEADER = 'x-correlation-id';

export const corsOptions: CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export const helmetOptions: FastifyHelmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [`'self'`],
      styleSrc: [`'self'`, `'unsafe-inline'`],
      imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
      frameSrc: [`'self'`],
      manifestSrc: [`'self'`],
      scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
    },
  },
};

export const validationPipeOptions: ValidationPipeOptions = {
  whitelist: true,
  transform: true,
  forbidNonWhitelisted: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
};
