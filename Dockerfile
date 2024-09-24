FROM node:20.14.0-alpine

RUN npm install -g @angular/cli

COPY package*.json ./

WORKDIR /app

RUN npm install

EXPOSE 4200

COPY . .

CMD [ "ng", "serve", "--host", "0.0.0.0", "--disable-host-check" ]