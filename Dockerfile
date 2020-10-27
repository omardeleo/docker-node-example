FROM node:current-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

CMD [ "node", "server.js" ]