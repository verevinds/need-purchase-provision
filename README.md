# Потребность Закупка Обеспеченность

## Оглавление

1. [:package: Установка](#package-установка)
2. [:scroll: Скрипты](#scroll-скрипты)
   1. [:straight_ruler: Запуск для разработки](#straight_ruler-запуск-для-разработки)
   2. [:dollar: Продакшен](#dollar-продакшен)
   3. [:bookmark_tabs: Тесты](#bookmark_tabs-тесты) 

## :package: Установка

Скачиваем

```cmd
  git clone https://github.com/verevinds/need-purchase-provision.git
```

Переходим в папку

```cmd
  cd need-purchase-provision
```

Устанавливаем все пакеты из зависимостей

```cmd
  npm install
```

## :scroll: Скрипты

### :straight_ruler: Запуск для разработки

```cmd
  npm run start
```

Webpack компилирует код, запускает сервер. После этого открывает в новой вкладке Вашего этот код.
После сохранения отредактированного кода заново компилирует код и обновляет страницу.

### :dollar: Продакшен

```cmd
npm run build
```

Webpack собирает код для продакшена. Процесс долгий. После сборки появиться папка dist, и в ней будет файл index.html и другие файлы с расширениями js, css. Эти файлы можно заливать на Ваш сервер.

### :bookmark_tabs: Тесты

```cmd
npm run test
```

Запускается Jest в режими "Слушатель". Он пробегается по всем тестам проекта, в описание файла которых есть .test. . На каждое изменение файла, проверка теста проходит вновь.


# RESTApi
## Базовый URL
```
http://192.168.213.51:8080/api
```
## Потребности

|URL| Методы | Тип параметра | Параметр | Вернёт | Ошибки |
|---|--------|---------------|----------|--------|--------|
|/needs|GET|query|limit: number, offset: number, userNumber: number|[{ id, user, number1, number2, datecreate, dateneed, dateready, datesend, draw, import, createAt, updateAt, contracts:{ id, name, description, visible, type }, orders:{ id, parent, name, title, description } }]|500: Произошла ошибка при получении Needs|
|/needs|POST|body|{user, role}|{user, role}|500: Произошла ошибка при создании Needs.|
|/needsLogs|GET|query|need|[{ need, type, value, user, timestamp }] | * 400: Вы не указали номер потребности!  * 404: Информация по потребности №${need} не найдена!  * 500: Произошла ошибка на сервере! Обратитесь к администратору.|
|/needsLogs|POST|body|{ need, type, value, user, timestamp }|{ need, type, value, user, timestamp }|500: Произошла ошибка при создании NeedsLogs.|
