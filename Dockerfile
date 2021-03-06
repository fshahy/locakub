FROM node:14.15.4

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]