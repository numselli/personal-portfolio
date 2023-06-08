FROM node:20.2.0-alpine3.17

EXPOSE 8090

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "index.mjs"]
