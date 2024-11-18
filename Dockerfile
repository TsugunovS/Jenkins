FROM node:16

USER node

WORKDIR /app

COPY . .

RUN npm install --unsafe-perm

EXPOSE 8080

CMD ["node", "app.js"]

