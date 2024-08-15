# todo use a smaller upto date image
ARG NODE_VERSION=node:20.12.1

FROM $NODE_VERSION AS dependency-base

RUN useradd -ms /bin/bash appuser

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# copy the app, note .dockerignore
COPY package.json .
COPY package-lock.json .

RUN chown -R appuser:appuser package.json
RUN chown -R appuser:appuser package-lock.json

RUN npm ci

FROM dependency-base AS production-base

# Run in production mode
ENV NODE_ENV=production

# build will also take care of building
# if necessary
COPY . .
RUN npm run build

USER appuser

FROM $NODE_VERSION AS production

COPY --from=production-base /app/.output /app/.output
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# start the app
ENTRYPOINT ["/app/entrypoint.sh"]