FROM node:alpine

WORKDIR /app
COPY pakage.json ./
RUN npm install
COPY ./ ./

CMD [ "npm","start" ]