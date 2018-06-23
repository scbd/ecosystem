FROM mhart/alpine-node:8.11.2

ENV HOST localhost
ARG COMMIT
ENV COMMIT $COMMIT
ARG apiUrl
ENV apiUrl $apiUrl
ARG baseUrl
ENV baseUrl $baseUrl

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
    apk add --no-cache bash

COPY . /usr/src/app/

RUN yarn
RUN yarn build

EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
