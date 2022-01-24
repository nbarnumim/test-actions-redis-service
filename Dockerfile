FROM node:14
WORKDIR /app
ARG REDIS_HOST=127.0.0.1
ARG REDIS_PORT=6379
COPY package.json package-lock.json index.js ./
RUN export REDIS_HOST=$REDIS_HOST && \
    export REDIS_PORT=$REDIS_PORT && \
    npm install && \
    npm start
