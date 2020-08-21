# Показать все потребности

Получить информацию о всех потребностях. (30 потребностей по умолчанию)

**URL** : `/api/needs/`

**Метод** : `GET`

**Auth required** : Нет

**Требуются разрешения** : Нет

## Успешный запрос

**Code** : `200 OK`

**Пример**


```json
[
    {
        "id": 4288,
        "user": 81007,
        "number1": 1,
        "number2": 9,
        "datecreate": 1597974855,
        "dateneed": 1601398800,
        "dateready": 1597975285,
        "datesend": 0,
        "draw": "",
        "import": "",
        "createdAt": "2020-08-21T08:54:15.000Z",
        "updatedAt": "2020-08-21T08:54:15.000Z",
        "contracts": {
            "id": 1,
            "name": "1999",
            "description": "Внутреннее потребление",
            "visible": 0,
            "type": 1
        },
        "orders": {
            "id": 9,
            "parent": 1,
            "name": "2011",
            "title": "Спецодежда",
            "description": ""
        }
    }
]
```

