# Production image, copy all the files and run next
FROM node:22.2.0-alpine as runner
LABEL maintainer="Gustavo Perdomo <gperdomor@gmail.com>"
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /usr/src/app
COPY apps/web/next.config.js ./
COPY apps/web/public ./public
COPY apps/web/.next/standalone/apps/web ./
COPY apps/web/.next/standalone/package.json ./
COPY apps/web/.next/standalone/node_modules ./node_modules
COPY apps/web/.next/static ./.next/static
# RUN npm i sharp
RUN chown -R node:node .
USER node
EXPOSE 3000
# COPY --chown=node:node ./tools/scripts/entrypoints/api.sh /usr/local/bin/docker-entrypoint.sh
# ENTRYPOINT [ "docker-entrypoint.sh" ]
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["dumb-init", "node", "server.js"]
