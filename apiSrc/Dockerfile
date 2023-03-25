FROM node:19.6.1-alpine3.16

EXPOSE 8090

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "index.mjs"]
