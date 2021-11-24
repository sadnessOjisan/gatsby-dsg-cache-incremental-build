FROM node:16

WORKDIR /home/node/app

COPY . .

RUN npm install && \
    npm run build

EXPOSE 8080

ENV PORT 8080

CMD [ "npm", "run", "serve" ]