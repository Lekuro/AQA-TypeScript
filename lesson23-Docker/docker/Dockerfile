# Використовуємо Node.js для запуску React
FROM node:24-slim AS base

# Встановлюємо git
RUN apt-get update && apt-get install -y \
    git\
    curl\
    && rm -rf /var/lib/aptlists/*

# Робоча директорія
WORKDIR /app

# Клонуємо репозиторій
RUN git clone https://github.com/AhmedShaykh/Expense-Tracker-App-With-React.JS.git .

# Встановлюємо залежності
RUN npm install

# Білдимо додаток
RUN npm run build

# Встановлюємо простий сервер для React (serve)
RUN npm install -g serve

# Експонуємо порт
EXPOSE 3000

# Запускаємо білд через serve
CMD ["serve", "-s", "build", "-l", "3000"]

# docker build -t expense-tracker:latest .
## docker build -t expense-tracker:latest -f docker/Dockerfile .
# docker run -d -p 3000:3000 expense-tracker:latest

# reportportal by yml
# curl -O https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
# docker-compose -p reportportal up -d

# reportportal by git
# git clone https://github.com/reportportal/reportportal.git
# cd reportportal
# docker-compose -p reportportal up -d --build
