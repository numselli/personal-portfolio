FROM node:20.2.0-alpine3.17 as build-stage

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY ./nginx.conf /etc/nginx/nginx.conf