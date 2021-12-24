# Software-Engineering-2021
Peter the Great St. Petersburg Polytechnic University: Software Engineering course 2021

Feel free to ask all your questions on the course's telegram channel.

## 80101

- Фам Тхи Тхань Бинь
    - https://github.com/PhamBinh98/Software-Engineering-2021
    - HW1:
        * Status: Done (Nov 13)
        * Notes:
            - Наличие ветки `main` говорит о `git-flow`, но никакого кода в `main` я не вижу. Нужно доделать работу (используя `release/` ветку).
            - Для работы над фичами, стоит использовать ветки с префиксом `feature/`
            - Необходимо исправить `.gitconfig`
            - Декомпозиция задач есть, но это декомпозиция с точки зрения инженера. Бизнесу из описания задачи должно быть понятно, какую пользу несёт эта фича!
            - Линковка задач и коммитов сделана неожиданно))) Я предполагал обратное, т.к. в комментарии к коммиту указывать номер проблемы, которая решается этим коммитом.
    - HW2:
        * Status: Done (Dec 16)
        * Notes:
            - `feature`-ветки не должны порождаться от `main`, для этого есть `develop`
            - `develop` не должен мерджиться в `main`, для этого есть `release`
- Дзюба Богдан
    - HW1:
        * Status: NOT Done (Nov 30)
        * Notes:
            - Я не понимаю какая это `git`-модель, это нужно исправить
            - `Docker` это не обёртка над консольными утилитами, это изолированная среда для сетевых сервисов
- Maksem Vasiliy
    - HW1:
        * Status: NOT Done (Nov 30)
        * Notes:
            - Я не понимаю какая это `git`-модель
- Есин Никита
    - https://github.com/KazuruK/Software-Engineering-2021
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Ветка `develop` не должна мерджиться в `master`
            - Управляеть версиями лучше через теги в `git`, либо в `release` ветке
- Загороднов Дмитрий
    - https://github.com/DmitryZagorodnov/btc_to_rub_converter
    - HW1:
        * Status: Done (Dec 1)
        * Notes:
            - Не должно быть прямых коммитов в `master` (`2c79d36`, `8c7f2a2`)
            - Некоторые ветки (9, 7 ,12) форкнуты не от `master`

## 80202

- Кобыжев Александр
    - https://github.com/alexnevskiy/BitcoinWatcher
    - HW1:
        * Status: Done (Nov 10)
        * Notes:
            - Для работы над фичами, стоит использовать ветки с префиксом `feature/`
            - Ветка `develop` не мерджится прямо в `master`, для этого есть `release/`. В этой же ветке проставляются номера версий для артефактов.
            - Прямые коммиты в `master` не допустимы; каждый коммит в `master` это релиз новой версии продукта!
            - Часть коммитов (из web-интерфейса GitHub) сделана от имени одного пользователя, а другая часть (с рабочей станции) от имени другого. Проблема в `.gitconfig`. С этим нужно разобраться для HW2.
            - Мне нравится как оформлен `README.md`
            - Работа с `DE`, конечно, не то, для чего создавался `Docker`, то это вполне решаемая задача заставить уведомления работать из контейнера.
            - Проигнорировано требование декомпозиции задачи на `issues` и линковка коммитов с задачами.
            - Бедные описания к коммитам, они не отвечают на вопрос "зачем?".
    - HW2:
- Сухачев Никита
    - https://github.com/SukhachevN/Software-Engineering-2021
    - HW1:
        * Status: Done (Nov 13)
        * Notes:
            - Всё те же замечания, что я писал Фам Тхи Тхань Бинь: нужен коммит в `main` (раз он есть), префикс для `feature/` веток, настроить `.gitconfig`
            - В задачах заметил "Рефакторинг". Такие задачи плохо продаются бизнесу, т.к. не несут коммерческой ценности. На эту тему можно почитать Фаулера, он описывает принцип бойскаутов для решения таких ситуаций.
            - Не стоит миксовать русский и английский языки при комментировании коммитов.
    - HW2:
        * Status: Done (Dec 16)
        * Notes:
            - Опять всё как у Фам Тхи Тхань Бинь
- Lunyak.NA
    - https://bitbucket.org/luna_koly/btc2btsconverter/src/main/
    - HW1:
        * Status: Done (Nov 13)
        * Notes:
            - Линковать коммит достаточно с `issue`. Линковка на `PR` нужна скорее для ситуации, когда там была допущена какая-то ошибка, и новый коммит это фиксит
            - Если для БД креденшелы задаются через переменные окружения, то и для сервиса должно быть точно так же (`backend/backend/settings.py`)
            - Нельзя переписывать историю публичных веток, тем более форсом ломать упорядоченность коммитов (https://bitbucket.org/luna_koly/btc2btsconverter/commits/branch/main). Все коммиты должны образовывать односвязный список.
- Ткаченко Даниил
    - https://github.com/Daniil1380/calculator
    - HW1:
        * Status: Done (Nov 27)
        * Notes:
            - `.mnv` в `.gitignore`.
            - Разобраться с `.gitconfig`, чтобы все коммиты шли от понятного пользователя.
            - `master` форкнут от... Уф... Граф веток взрывает мозг. Но радует наличие `release` ветки.
            - Для реализации функционала следует использовать ветки с префиксом `feature/`
- Шерепа Никита
    - https://github.com/beatHunteRcode/ZoneNewsDiscordBot
    - HW1:
        * Status: Done (Dec 12)
        * Notes:
            - Теперь осталось выработать привычку делать декомпозицию задачи перед работой
            - прямые коммиты в `develop` ветку не делаются, для это этого есть `feature`-ветки
- Савельев Дмитрий
    - https://github.com/KarrokBeorna/YoutubeGifBot
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - Ветки `master` и `develop` перепутаны местами: `feature` векти мерджатся в `develop`.
            - в качестве временной директории можно использовать `/tmp`, не надо закладываться на `Загрузки`
            - 'API-key' нельзя хардкодить, его нужно передавать как переменную окружения
- Крынский Павел
    - https://github.com/flomikoon/Currency-Conversion
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - Ветка `feature` не является должноживущей. Она создаётся под каждую фичу, и закрывается после мерджа.
            - Ветка `develop` не мерджится на прямую в `master`
            - Разобраться с `.gitconfig`
            - Служебные файлы (`.idea`) нужно закрывать от индексирования через `.gitignore`
- Рубан Станислав
    - https://gitlab.com/pupptmstr/ass
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Все чувствительные данные (пароли к БД, токены доступа к API) не должны попадать в репозиторий. Для этого нужно использовать либо сервисы управления серкретами, либо сделать передачу через переменные окружения
            - не все фичи доведены до мерджа с основной веткой
            - не очень понимаю, что такое `.run`, но подозреваю что это должно быть за `.gitignore`
            - разобраться с `.gitconfig`
- Смирнов Лев
    - https://github.com/Lion-Hunter/UsdToEurConverter
    - HW1:
        * Status: Done (Dec 1)
        * Notes:
            - ветка `dev` не должна мерджиться в `main`, для этого есть `release`
            - в `main` напрямую ничего коммитить нельзя, для этого есть `hotfix`
            - для `feature`-веток стоит использовать префикс `feature/`
            - в комментарии к коммиту рекомендуется использовать номер `issue`, или отвечать на вопрос "зачем" делаются эти изменения
- Чернышев Ярослав
    - https://github.com/Jar-Cher/SoftEngPrj
    - HW1:
        * Status: NOT Done (Dec 4)
        * Notes:
            - Путаница в ветках, куча прямых коммитов в `master` и `develop`, потом ещё и мердж `master` в `develop`.
            - Коммиты и `issues` никак не слинкованы, `issues` вообще закрыты руками.
- Fedorov Sergey
    - https://github.com/Joker707/SE_converter
    - HW1:
        * Status: NOT Done (Dec 6)
        * Notes:
            - не выполнены требования, коммиты и `issues` на связаны
- Smirnov Nikita
    - https://github.com/3oDoR/TemperatureConverter
    - HW1:
        * Status: NOT Done (Dec 9)
        * Notes:
            - Нельзя делать прямые коммиты в `develop`, для этого есть `feature`
            - Нельзя делать мерджить `develop` и `master`, для этого есть `release`
            - ...а теперь представь, что у тебя релиз, и срочно нужно откатить какую-то фичу?
- Кейта Абубакар Сидики
    - https://github.com/3oDoR/TemperatureConverter
    - HW1:
        * Status: Done (Dec 13)
        * Notes:
            - Разобраться с `.gitconfig`
            - Нельзя делать прямые коммиты в `develop`
            - Ветка `develop` не должна мерджиться в `master`

- Луняк Николай - https://bitbucket.org/luna_koly/btc2btsconverter

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
    - HW2:
        * Status: NOT Done (Dec 17)
            - C `Jenkins` всё хорошо, но коммит в `master` опять улетел прямо из `develop`. Нужно откатить последний коммит из `master`, и сделать всё через `release`
- Джеус Андрей
    - https://github.com/MickeyMouseMouse/Software-Engineering-lab1
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Ветка `develop` не должна мерджиться в `master`, для этого есть `release/`
- Невоструева Яна
    - https://github.com/NevostruevaYana/CurrencyConverter
    - HW1:
        * Status: Done (Dec 12)
        * Notes:
            - `develop` и `master` не могут мерджиться друг в друга
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
    - https://github.com/BigArtemka/Kanye-Quote-And-Cat-Picture-API/
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Всё ОК, только `develop` указывает на коммит в `release/...` ветке. Чтоб такого не было, `relese` должен мерджиться в `master`, а потом обратно в `develop`.
            - Хорошей практикой для управления версиями было бы положить отдельный файл с версией в репо (либо читать `git tag`), и читать оттуда версию при сборке `JAR`-ника.
- Tsaplin Ilya
    - https://github.com/TsaplinIA/Software_Engineering_Labs
    - HW1:
        * Status: Done (Dec 17)
        * Notes:
            - `develop` не мержится в `master`
            - линковка коммитов и задач сделана правильно, но это не означает что `commit message` не должен больше содержать ничего


## 80201

- Матвеец Андрей
    - https://github.com/Nekobitlz/case-converter
    - HW1:
        * Status: NOT Done (Nov 29)
        * Notes:
            - Нет управления ветками

- Солянкин Илья
    - https://github.com/Evil-Enot/DegreeConverter/
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - Изменения из `release` не вернулись в `develop`
            - Короткоживущие ветки следует отделять символом `/`
            - Разобраться с `.gitconfig` (см. коммит `48c9ae7`)
- Ляшенко Валерия
    - https://github.com/Evil-Enot/DegreeConverter/
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - нужно только изменения из `hotfix` вернуть обратно в `develop`, а то их можно потерять...
- Рамис Сахибгареев
    - https://github.com/rapturemain/currency-converter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - В Trunk Based Development нам не нужна как таковая ветка `release`, там мы активно используем теги
            - Если есть желание разделить ветки по назначению (`feature` vs `ops`), лучше импользовать префикс разделённый символом `\`
- Шелаев Никита
    - https://github.com/ShelaevNikita/Currency_converter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Нельзя делать прямые коммиты в `master`. Только `release` и `hotfix` попадают в `master`.
            - Комментарий к коммиту должен объяснять для чего делаются эти изменения.
            - Я не уверен, что `venv` нужен внутри `Docker`, т.к. `Docker` уже даёт более строгие гарантии изоляции
    - HW2:
        * Status: NOT Done (Dec 18)
        * Notes:
            - Для `git-flow` должно быть два беджика
            - `feature` ветка для теста была форкнута от `master`
            - `hotfix` с беджем нужно так же вернуть в `develop`
- Ulyanov Andrey
    - https://github.com/AndreyUlyanov/temperature-converter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - В `develop` и в `master` прямые коммиты не попадают.
            - Ветки `develop` и `master` не пересекаются, нужна ветка `release`.
            - Навести порядок в `.gitconfig`
            - Скрыть `.idea` за `.gitignore`
- Dimukhametov Marat
    - https://github.com/maratdin7/file-storage
    - HW1:
        * Status: Done (Dec 6)
        * Notes:
            - В `develop` 2 раза сходил в `master`, для этого нужно использовать `release`.
            - Прямой коммит в `develop` с бампов мерсии (`12a1b96`), для этого лучше использовать `release`
            - Ещё один прямой коммит, для которого нужно использовать `feature` (`1ef1090`). Рефакторинг не несёт прямой ценности для бизнеса (читать Фаулера).
            - ветка `hotfix` не возвращена в `develop` (`d1116cd`).
- Петров Виталий
    - https://github.com/ADsty/temperature_convertor
    - HW1:
        * Status: Done (Dec 6)
        * Notes:
            - Разобраться с `gitconfig` (https://github.com/ADsty/temperature_convertor/commits/main)
            - Вижу попытку разобраться с `release`, но получился какой-то треш: мы форкается от `develop`, и мерджимся в `master` (при необходимости, обратно в `develop` тоже)
- Иванов Игорь
    - https://github.com/teacons/btc-eth-converter
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Я бы передавал `API-key` через переменные окружения
            - Если у тебя релиз, то "SNAPSHOT" тащить уже не обязательно))
    - HW2:
        * Status: Done (Dec 20)
        * Notes:
            - Ветка `github_ci` форкнута от `master`, а должна быть от `develop`
- Пучкина Виктория
    - https://github.com/Juniell/USD-EUR-converter
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - В рамках взаимного уважения, я просил сдавать СВОИ работы.
    - HW2:
        * Status: Done (Dec 20)
        * Notes:
            - Ветка `github_actions` форкнута от `master`, а должна быть от `develop`
