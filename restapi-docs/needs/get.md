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
        "id": 4117,
        "user": 37584,
        "number1": 1,
        "number2": 18,
        "datecreate": 1594107182,
        "dateneed": 1596560400,
        "dateready": 1594108696,
        "datesend": 1594189205,
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
            "id": 18,
            "parent": 1,
            "name": "2020",
            "title": "Комплектующие",
            "description": "память, платы в комп."
        },
        "positions": [
            {
                "id": 32110,
                "parent": 0,
                "item": 20082,
                "measure": 24,
                "need": 4117,
                "count": 1,
                "cost": 690,
                "code": "",
                "codeowner": 0,
                "datestock": 1594189205,
                "dateowner": 1595126663,
                "dateorder": 1595312341,
                "datefinal": 0,
                "claim": 4397,
                "owner": 43,
                "document": "",
                "cancel": 0,
                "unit": {
                    "id": 20082,
                    "name": "Аккумулятор для радиотелефона Siemens EBA-510",
                    "number": "V30145-K1310-X250",
                    "producer": "Cameron Sino",
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
                    "id": 4397,
                    "user": 43,
                    "created_date": 1595312341,
                    "changed_date": 1595826359,
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
                    "comment": "Картриджи",
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
                },
                "byDocument": null
            },
            {
                "id": 32109,
                "parent": 0,
                "item": 20081,
                "measure": 24,
                "need": 4117,
                "count": 20,
                "cost": 450,
                "code": "",
                "codeowner": 0,
                "datestock": 1594189205,
                "dateowner": 1595126663,
                "dateorder": 1595826368,
                "datefinal": 1597223957,
                "claim": 4406,
                "owner": 43,
                "document": "1452",
                "cancel": 0,
                "unit": {
                    "id": 20081,
                    "name": "Мышь Logitech M90, 1000dpi, оптическая светодиодная, USB, черный",
                    "number": "910-001794",
                    "producer": "LOGITECH",
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
                    "id": 4406,
                    "user": 43,
                    "created_date": 1595826337,
                    "changed_date": 1595994563,
                    "expected_date": 0,
                    "protocol": "",
                    "protocol_date": 0,
                    "contract": "",
                    "contract_date": 0,
                    "contract_end": 0,
                    "contract_notice": 0,
                    "cost": "J0379217 от 27.07.2020",
                    "cost_date1": 0,
                    "cost_date2": 0,
                    "comment": "Мониторы\n",
                    "progress1": 1595924924,
                    "progress2": 0,
                    "progress3": 0,
                    "progress4": 0,
                    "progress5": 1595924927,
                    "progress6": 0,
                    "progress7": 0,
                    "progress8": 0,
                    "progress9": 0,
                    "progress10": 0,
                    "progress11": 0,
                    "progress12": 0,
                    "progress13": 0,
                    "progress14": 0
                },
                "byDocument": {
                    "id": 1452,
                    "owner": 8310,
                    "need": 3396,
                    "claim": 0,
                    "position": 0,
                    "filename": "№15-ФЗ_о табачном дыме.pdf",
                    "timestamp": 1574662433,
                    "exist": 1
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