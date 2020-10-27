FROM node:current-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json* ./

RUN npm install

COPY . ./

CMD [ "node", "src/server.js" ]