FROM node:16
RUN groupadd -r node && useradd -r -g node -m node
USER node
WORKDIR /app
COPY . .
RUN npm install --unsafe-perm
EXPOSE 8080
CMD ["node", "app.js"]

