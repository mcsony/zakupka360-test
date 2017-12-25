# Тестовое 

###требования
##### nodejs 7+ , mpn 4+
   ```скачать Nodejs curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -```
   ```Установка sudo apt-get install -y nodejs```

##### angular/cli
 ```sudo npm i -g @angular/cli typings```
 
## Развертка
#### Установка зависимостей
 - npm i

### Создание файла конфигурации
 * Клонировать файл src/settings.ts.tpl и называть новый файл src/settings.ts
 * ЗАПОЛНИТЬ КАК МИНИМУМ НАЗВАНИЕ ХОСТА (BASE_DOMAIN) И ПОМЕНЯТЬ ENV ИЗ DEV НА PROD ДЛЯ ПРОДАКШЕНА.

### Запуск на деве
 `npm start` .  Открыть `http://localhost:4200/`.

### Запуск на прод

 `ng build` 
 * все файлы собираются в папке `dist/`.
