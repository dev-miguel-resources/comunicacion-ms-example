FROM node:14-alpine

ARG BASE_DIR

WORKDIR /application

COPY ${BASE_DIR}/package.json .

RUN yarn install

COPY ${BASE_DIR}/. .

CMD ["yarn", "run", "start"]







