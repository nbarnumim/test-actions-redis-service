FROM node:14
WORKDIR /app
ENV REDIS_HOST=redis \
    REDIS_PORT=6379
COPY package.json package-lock.json index.js ./
RUN npm install && \
    npm start
