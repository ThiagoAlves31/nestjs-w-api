FROM node:15.12.0-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build