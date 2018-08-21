FROM mhart/alpine-node:10
EXPOSE 3000

WORKDIR /app

ADD package.json /app/
RUN npm install && npm install --save serve

ADD . /app

CMD ["npm", "run" "now-start"]
# CMD ["node", "./node_modules/.bin/next", "start"]