# Rebuild the source code only when needed
FROM node:16.5.0-alpine as builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN CYPRESS_INSTALL_BINARY=0 npm ci
COPY . .
RUN npm run nx run web:build -- --c=production

FROM nginx:1.21.1-alpine
LABEL maintainer="Gustavo Perdomo <gperdomor@gmail.com>"
WORKDIR /app
COPY --from=builder /app/dist/apps/web /usr/share/nginx/html
