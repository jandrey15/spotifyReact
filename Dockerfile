FROM mhart/alpine-node:10 as base
EXPOSE 5000

WORKDIR /app

ADD package.json /app/
RUN npm install
RUN npm install --save serve

ADD . /app

CMD ["npm", "run", "now-start"]
# CMD ["node", "./node_modules/.bin/next", "start"]