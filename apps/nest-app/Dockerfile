# Install dependencies only when needed
FROM node:16.14.2-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY dist/apps/nest-app/package*.json ./
RUN npm install --only=production

# Production image, copy all the files and run nest
FROM node:16.14.2-alpine as runner
LABEL maintainer="Gustavo Perdomo <gperdomor@gmail.com>"
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nestjs -u 1001
COPY --chown=nestjs:nodejs dist/apps/nest-app .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
USER nestjs
EXPOSE 3000
ENV PORT 3000
# COPY --chown=node:node ./tools/scripts/entrypoints/api.sh /usr/local/bin/docker-entrypoint.sh
# ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD ["dumb-init", "node", "main.js"]
