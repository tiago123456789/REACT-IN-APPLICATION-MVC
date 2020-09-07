FROM node:12.18.3

ENV PORT 3000

ENV WORKDIR /app

ENV SECRET_COOKIE teste

COPY . $WORKDIR

RUN  npm i -g pm2

WORKDIR $WORKDIR

RUN npm i

RUN cd $WORKDIR/componentsReact && npm i && npm run production

EXPOSE $PORT

ENTRYPOINT ["node", "./src/index.js"]
 