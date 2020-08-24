[🏠 На главную](../../README.md)


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
        "id": 4124,
        "user": 23,
        "number1": 1,
        "number2": 5,
        "datecreate": 1594279595,
        "dateneed": 1595610000,
        "dateready": 1594280210,
        "datesend": 1594344573,
        "draw": "",
        "import": "",
        "createdAt": "2020-07-28T11:26:03.000Z",
        "updatedAt": "2020-07-28T11:26:03.000Z",
        "contracts": {
            "id": 1,
            "name": "1999",
            "description": "Внутреннее потребление",
            "visible": 0,
            "type": 1
        },
        "orders": {
            "id": 5,
            "parent": 1,
            "name": "2007",
            "title": "Инструмент",
            "description": "дрели, отвёртки, снегоуборщики"
        },
        "positions": [
            {
                "id": 32125,
                "parent": 0,
                "item": 718,
                "measure": 24,
                "need": 4124,
                "count": 10,
                "cost": 0,
                "code": "",
                "codeowner": 0,
                "datestock": 1594344573,
                "dateowner": 1595126766,
                "dateorder": 1595238984,
                "datefinal": 0,
                "claim": 3595,
                "owner": 81205,
                "document": "",
                "cancel": 0,
                "unit": {
                    "id": 718,
                    "name": "Резец KORLOY",
                    "number": "MBCR 0610-1  Сплав PC30M",
                    "producer": "Korloy",
                    "gost": "",
                    "measure": 24,
                    "suodID": "",
                    "foxproID": ""
                },
                "byMeasure": {
                    "name": "штука",
                    "title": "шт"
                },
                "byClaim": {
                    "id": 3595,
                    "user": 81205,
                    "created_date": 1579053402,
                    "changed_date": 1595238984,
                    "expected_date": 0,
                    "protocol": "",
                    "protocol_date": 0,
                    "contract": "",
                    "contract_date": 0,
                    "contract_end": 0,
                    "contract_notice": 0,
                    "cost": "",
                    "cost_date1": 0,
                    "cost_date2": 0,
                    "comment": "KORLOY + HOFFMAN ГПЗ  (Инструмент)",
                    "progress1": 0,
                    "progress2": 0,
                    "progress3": 0,
                    "progress4": 0,
                    "progress5": 0,
                    "progress6": 0,
                    "progress7": 0,
                    "progress8": 0,
                    "progress9": 0,
                    "progress10": 0,
                    "progress11": 0,
                    "progress12": 0,
                    "progress13": 0,
                    "progress14": 0
                }
            }
        ]
    },
    ...
    {
        "id": 4290,
        "user": 81246,
        "number1": 77,
        "number2": 391,
        "datecreate": 1597994780,
        "dateneed": 0,
        "dateready": 0,
        "datesend": 0,
        "draw": "",
        "import": "",
        "createdAt": "2020-08-21T14:26:20.000Z",
        "updatedAt": "2020-08-21T14:26:20.000Z",
        "contracts": {
            "id": 77,
            "name": "ГПЗ 2020 Основная",
            "description": "Годовая потребность закупок",
            "visible": 3,
            "type": 1
        },
        "orders": {
            "id": 391,
            "parent": 77,
            "name": "2007",
            "title": "Инструмент",
            "description": "дрели, отвёртки, снегоуборщики"
        },
        "positions": [],
        "byClaim": null
    }
]
```

[🏠 На главную](../../README.md)