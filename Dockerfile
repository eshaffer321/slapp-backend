FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install pm2 -g

RUN npm install

EXPOSE 8080

CMD ["pm2-runtime", "app.js"]
