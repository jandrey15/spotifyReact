FROM mhart/alpine-node:10 as base
EXPOSE 3000

WORKDIR /app

ADD package.json /app/
RUN npm install npm run build

ADD . /app

CMD ["npm", "start"]
# CMD ["node", "./node_modules/.bin/next", "start"]