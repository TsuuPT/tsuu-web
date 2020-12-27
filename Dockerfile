# COMPILE
FROM node:lts-alpine3.9 AS BUILD
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

COPY . ./
ENV PATH="./node_modules/.bin:$PATH"
RUN yarn generate


# HTTP SERVER
FROM nginx:1.19-alpine AS http
EXPOSE 80

COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=BUILD /app/dist /usr/share/nginx/html
