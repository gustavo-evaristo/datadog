FROM node:16

COPY . .

WORKDIR .

RUN yarn && yarn build

EXPOSE 3000

CMD ["yarn", "start"]
