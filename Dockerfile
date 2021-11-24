FROM node:16

WORKDIR /home/node/app

COPY . .

RUN npm install && \
    npm run build

EXPOSE 9000

CMD [ "npm", "run", "serve" ]