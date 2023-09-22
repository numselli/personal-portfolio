FROM node:20.5.0-alpine3.17 as build-stage

WORKDIR /preApp
COPY . /preApp

RUN npm install
RUN npm run build



FROM node:20.5.0-alpine3.17 as production-stage
RUN mkdir /app
COPY --from=build-stage /preApp /app

EXPOSE 3000

CMD ["node", "/app/.output/server/index.mjs"]