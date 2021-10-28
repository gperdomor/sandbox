# Install dependencies only when needed
FROM node:16.13.0-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY dist/apps/api/package*.json ./
RUN npm install --only=production

FROM node:16.13.0-alpine as runner
LABEL maintainer="Gustavo Perdomo <gperdomor@gmail.com>"
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=deps /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=deps /usr/src/app/package.json ./package.json
COPY --chown=node:node dist/apps/api .
# EXPOSE 3333
# COPY --chown=node:node ./tools/scripts/entrypoints/api.sh /usr/local/bin/docker-entrypoint.sh
# ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD ["dumb-init", "node", "main.js"]
