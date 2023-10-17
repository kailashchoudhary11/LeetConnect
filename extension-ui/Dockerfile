FROM node:18-alpine

WORKDIR /app/ui

RUN npm install vite@latest

COPY package*.json /app/ui

RUN npm install

COPY . /app/ui

EXPOSE 5001

CMD [ "npm", "run", "dev" ]