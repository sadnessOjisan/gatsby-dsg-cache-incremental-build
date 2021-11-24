FROM node:16

WORKDIR /home/node/app

COPY . /home/node/app

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve", "-H", "0.0.0.0" ]