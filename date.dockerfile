FROM node:19

COPY . .

RUN npm ci

CMD [ "node","date-service.js" ]