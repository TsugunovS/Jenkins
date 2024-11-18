FROM node:16
WORKDIR /app
COPY . .
RUN chown -R node:node /app
USER node
RUN npm install --unsafe-perm
EXPOSE 8080
CMD ["node", "app.js"]

