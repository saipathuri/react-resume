FROM node:latest

RUN mkdir /home/app
WORKDIR /home/app

COPY package.json yarn.lock ./
COPY public/ ./public
COPY src/ ./src
RUN yarn install
RUN yarn build
EXPOSE 5000
CMD yarn start-prod