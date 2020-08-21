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
http://192.168.213.51:8080
```
## Потребности
* [Показать потребности](restapi-docs/needs/get.md) : `GET /api/needs/`
* [Создать потребность](restapi-docs/needs/post.md) : `POST /api/needs/`
### Лог потребности
* [Показать лог потребности](restapi-docs/needs-logs/get.md) : `GET /api/needsLogs/`
* ### Лог потребности
* [Показать владельцев потребности](restapi-docs/needs-owners/get.md) : `GET /api/needsOwners/`