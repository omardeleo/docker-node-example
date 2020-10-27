FROM node:current-alpine

RUN mkdir -p /srv && sudo chown node:node /srv
WORKDIR /srv
USER node
COPY package.json package-lock.json* ./

RUN npm install

COPY . ./