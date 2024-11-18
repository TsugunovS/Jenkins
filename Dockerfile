<<<<<<< HEAD
# Используем официальный Node.js образ
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта в контейнер
COPY . .

# Устанавливаем зависимости
RUN npm install

# Открываем порт
EXPOSE 8080

# Запускаем приложение
CMD ["node", "app.js"]

=======
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
>>>>>>> 0cc3de9 (Updated Jenkinsfile)
