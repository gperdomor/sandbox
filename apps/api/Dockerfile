# Rebuild the source code only when needed
FROM node:16.5.0-alpine as builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN CYPRESS_INSTALL_BINARY=0 npm ci
COPY . .
RUN npm run nx run api:build -- --c=production

FROM node:16.5.0-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/dist/apps/api/package.json ./package.json
RUN npm install --production --ignore-scripts

FROM node:16.5.0-alpine as runner
LABEL maintainer="Gustavo Perdomo <gperdomor@gmail.com>"
RUN apk add --no-cache libc6-compat dumb-init bash
ENV NODE_ENV production
USER node
WORKDIR /app
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY --chown=node:node --from=builder /app/dist/apps/api .
EXPOSE 3333
CMD ["dumb-init", "node", "main.js"]
