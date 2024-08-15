FROM node:20.12.1 AS build
WORKDIR /app
COPY . .

# Run in production mode
ENV NODE_ENV=production

RUN npm ci
RUN npm run build
RUN chmod +x /app/entrypoint.sh

# start the app
CMD ["sh", "/app/entrypoint.sh"]