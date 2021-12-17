# Software-Engineering-2021
Peter the Great St. Petersburg Polytechnic University: Software Engineering course 2021

Feel free to ask all your questions on the course's telegram channel.

## 80101

- Name -- URL
- Name -- URL
-

## 80202

-
-
-

## 80203

- Tarasenko Nikita
    - https://github.com/GetRhymes/ConverterXML
    - HW1:
        * Status: Done (Nov 13)
        * Notes:
            - Ветки `develop` и `master` друг к другу не ходят, для этого есть `release` и `hotfix`
            - Видимо вначале были проблемы с `.gitconfig`
            - Служебные папки (`.idea`) тоже принято прятать за `.gitignore`
- Никифоров Тимофей
    - https://github.com/nikiforovta/Software-Engineering-lab1
    - HW1:
        * Status: Done (Nov 23)
        * Notes:
            - Я вижу `master` и `main`. Это просто взрыв мозга, я не понимаю какой подход к управлению ветками тут используется.
            - В `git-flow` нет ветки, с именем `bugfix`.
            - Для линковки коммитов с задачами, в комментарии к коммиту указывается номер `issue`, т.е. руками `issue` закрывать не нужно
- Алексей Бедрин
    - https://github.com/HaveAHeart/AvgDailyTemperature
    - HW1:
        * Status: Done (Nov 27)
        * Notes:
            - был отличный граф коммитов... Пока `develop` не улетел прямо в `master`. Это можно было сразу пофиксить ревертом коммита.
            - В `feature`-ветках (как и в `hotfix` и `release`) рекомендуется префикс такого вида `feature/` (с символом `/`). Это позволяет всяким графическим средам удобно группировать ветки.
            - В комментарии к коммиту можно указывать номер `issue` для связи через символ `#`
- Джеус Андрей
    - https://github.com/MickeyMouseMouse/Software-Engineering-lab1
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Ветка `develop` не должна мерджиться в `master`, для этого есть `release/`
- Невоструева Яна
    - https://github.com/NevostruevaYana/CurrencyConverter
    - HW1:
        * Status: NOT Done (Nov 28)
        * Notes:
            - Произошла путаница в ветках, нужно это исправить (https://github.com/NevostruevaYana/CurrencyConverter/network)
            - Нужно разобраться с `.gitconfig`
- Медведев Данил
    - https://github.com/dVede/ConsoleWeatherApp
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - под конец `develop` был замерджен в `master`
            - Хорошей практикой считается разделять префикс `feature` от описание ветки символом `/`
- Шрамков Максим
    - https://github.com/k1unk/engineering_lab_1
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - `feature`-ветки должны иметь префикс `feature/`
            - каждая `feature`-ветка форкается от `develop`, и туда же возвращается
            - в `main` изменения попадают через `felease/`
            - скрыть `.idea` под `.gitignore`
- Хвацкин Леонид
    - https://github.com/TheGreenBeaver/Too-Doo
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Вроде всё так красиво, но почему `master` и `develop` в конце указывают на один коммит?
            - Предлагаю ещё в GitHub оформить как релиз, чтоб вообще законченный проект был (https://github.com/TheGreenBeaver/Too-Doo/releases)
- Рубша Анастасия
    - https://github.com/Valkiriya228/SoftwareEngLabFirst
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Я так понимаю, это попытка Trunk Based Development. Мы каждую новую `feature` форкаем от главной ветки, и обратно её туда сливаем. Теоретически возможна ситуация, когда мы `feature`-ветку форкаем от `feature`-ветки же, но это крайне не типично для Trunk Based Development (собственно одно из его основных назначений - бороться с такими ситуациями).
            - служебные директории (`.idea`) не должны попадать в кодобазу (`.gitignore`).
- Астудина Анастасия
    - https://github.com/astudina/SoftwareEngineering-Lab1
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Даже такие задачи, как добавление лицензии или картинки должны решаться через соответствующие `feature/` ветки, нельзя коммитить прямо в `master`
            - Веткам лучше давать более осмысленные названия, это поможет в будущем не запутаться
- Зайцева Елизавета
    - https://github.com/LizaZaytseva/SE_lab1_converter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Третья похожая по стилю работа... Ну ладно. Важно другое, важно не перемешивать ветки при Trunk Based Development.
            - Ну и `Docker` это скорее про демоны, чем про обёртку над интерактивными `cli` утилитами
- Васильев Роман
    - https://github.com/killawetz/Software-Engineering-lab1
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - `develop` не ходит в `master`, для этого есть `release`
            - нужно поместить вызов `gradle` в `Dockerfile`, чтобы это работало
- Курняков Пётр
    - https://gitlab.com/pupptmstr/ass
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Пароли к БД стоит передавать через переменные окружения
            - разобраться с `.gitconfig`
- Танашкин В.А.
    - https://github.com/NastyPill/JokesService
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - в `main` ветку так ничего и не попало, нужно сделать `release` ветку для завершения проекта
            - `feature` векти остались висеть в воздухе... Нужно сделать PR, и мерж коммит, чтоб история изменений оставалась последовательной.
- Викторов Илья
    - https://github.com/Victorov-I-A/CurrencyConverter
    - HW1:
        * Status: Done (Dec 1)
        * Notes:
            - Бинарный артефакт в репозитории -- это провал для разработчика!
            - Нужно дёргать `gradlew` на этапе сборки `Docker` образа
            - Не выполнены требования по декомпозиции задачи и созданию `issues`.
            - В коммитах куча не связанных вещей (`a451581`), результат плохой декомпозиции задачи.
            - Ветка `develop` возникла из ниоткуда, после трёх мерджей в `master`
            - Ветка `develop` не должна мерджиться в `master`
- Трачук Илья
    - https://github.com/kuchartI/QuizApp
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Ветки в реализацией функционала, оказались форкунты от `master` и слиты в `release`... Как это вообще пришло в голову?
            - на данный момент `develop` и `master` указывают на один коммит! А новый `release` просто висит в воздухе.
- Филимонов Артем
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Всё ОК, только `develop` указывает на коммит в `release/...` ветке. Чтоб такого не было, `relese` должен мерджиться в `master`, а потом обратно в `develop`.
            - Хорошей практикой для управления версиями было бы положить отдельный файл с версией в репо (либо читать `git tag`), и читать оттуда версию при сборке `JAR`-ника.

## 80201

-
-
-
