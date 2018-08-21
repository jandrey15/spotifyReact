FROM mhart/alpine-node:10 as base
EXPOSE 5000

WORKDIR /app

ADD package.json /app/
RUN npm install && npm install --save serve

ADD . /app

RUN npm run build

CMD ["npm", "run", "now-start"]
# CMD ["node", "./node_modules/.bin/next", "start"]