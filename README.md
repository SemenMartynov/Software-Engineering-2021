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
    - https://github.com/Bogunto14/Software-Engineering-lab1v2
    - HW1:
        * Status: Done (Jan 17)
        * Notes:
            - Я по прежнему не пониманию какая это модель ветвления, но тут хотя бы появились ветки
            - `Docker` это не обёртка над консольными утилитами, это изолированная среда для сетевых сервисов
            - нет файла лицензии
- Maksem Vasiliy
    - https://github.com/maksem-va/ValuteConverter
    - HW1:
        * Status: Done (Jan 17)
        * Notes:
            - Разобраться с `.gitconfig`
            - `.idea` в `.gitconfig`
            - Никаких прямых коммитов в `master`
    - HW2:
        * Status: NOT Done (Jan 18)
        * Notes:
            - Никаких прямых коммитов в `master`!
            - смотрю скрипт для Github Actions, и вижу там только тестирование ветки `master` <https://github.com/maksem-va/ValuteConverter/blob/master/.github/workflows/test.yml>
- Есин Никита
    - https://github.com/KazuruK/Software-Engineering-2021
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Ветка `develop` не должна мерджиться в `master`
            - Управляеть версиями лучше через теги в `git`, либо в `release` ветке
    - HW1:
        * Status: NOT Done (Jan 17)
        * Notes:
            - никаких прямых коммитов в `master` ветку, их нужно убрать!
            - Я вижу `develop` ветку, значит по заданию должно быть тестирование двух веток и две бейджика.
- Загороднов Дмитрий
    - https://github.com/DmitryZagorodnov/btc_to_rub_converter
    - HW1:
        * Status: Done (Dec 1)
        * Notes:
            - Не должно быть прямых коммитов в `master` (`2c79d36`, `8c7f2a2`)
            - Некоторые ветки (9, 7 ,12) форкнуты не от `master`
    - HW2:
        * Status: Done (Jan 15)
        * Notes:
            - `workflow` с паблишингом это класс, но прямых коммитов в `master` всё равно быть не должно.
- Джужуев Эдуард
    - https://github.com/Shadow-Haund/Lab1_OPi
    - HW1:
        * Status: Done (Jan 17)
        * Notes:
            - Нет файла с лицензией
            - `Dockerfile`, как правило, идёт без расширения `.txt` на конце
            - `Python` отлично поддерживает объекто-ориентированный подход, это позволили бы гибко управлять приложением
            - Имена хостов и номера портов стоит выносить в файл конфигурации и переопределять переменными окружения
- Юсупова Диана
    - https://github.com/diana-yusupova999/SoftwareEngineering
    - HW1:
        * Status: Done (Jan 17)
        * Notes:
            - Нельзя делать прямые коммиты в `master`

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
        * Status: Done (Dec 28)
        * Notes:
            - Занятно -- на GitHub кто-то этот проект уже форкнул и уже наделал коммитов в свой форк!)
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
    - HW2:
        * Status: Done (Dec 29)
        * Notes:
            - Вот как раз следование git-flow или trunk based development позволяют иметь чистую историю. Но коммиты должны быть линейно упорядочены, без этого ты теряешь возможность отслеживать какие изменения были сделаны в каком порядке и при каких обстоятельствах (для чего). Это применимо и к тому случаю, когда никто кроме тебя не работает в этом репозитории. Просто введи для себя правило никогда-никогда не делать форсы, пока не разберёшься в этом механизме окончательно.
- Ткаченко Даниил
    - https://github.com/Daniil1380/calculator
    - HW1:
        * Status: Done (Nov 27)
        * Notes:
            - `.mnv` в `.gitignore`.
            - Разобраться с `.gitconfig`, чтобы все коммиты шли от понятного пользователя.
            - `master` форкнут от... Уф... Граф веток взрывает мозг. Но радует наличие `release` ветки.
            - Для реализации функционала следует использовать ветки с префиксом `feature/`
    - HW2:
        * Status: Done (Jan 11)
        * Notes:
            - В git-flow мы не делаем прямые коммиты в `master` и `develop`
            - В git-flow ьф не мерджим `develop` в `master`, для этого есть ветка `release`. Нужно откатить последний коммит в `master` и исправить это
- Шерепа Никита
    - https://github.com/beatHunteRcode/ZoneNewsDiscordBot
    - HW1:
        * Status: Done (Dec 12)
        * Notes:
            - Теперь осталось выработать привычку делать декомпозицию задачи перед работой
            - прямые коммиты в `develop` ветку не делаются, для это этого есть `feature`-ветки
    - HW2:
        * Status: Done (Dec 31)
        * Notes:
            - Нельзя делать прямые коммиты в `master` ветку. Каждый коммит в `master` стоит рассматривать как новый релиз.
- Савельев Дмитрий
    - https://github.com/KarrokBeorna/YoutubeGifBot
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - Ветки `master` и `develop` перепутаны местами: `feature` векти мерджатся в `develop`.
            - в качестве временной директории можно использовать `/tmp`, не надо закладываться на `Загрузки`
            - 'API-key' нельзя хардкодить, его нужно передавать как переменную окружения
    - HW2:
        * Status: Done (Jan 9)
        * Notes:
            - Ты как-то посреди работы перешёл с TBD на git-flow...
- Крынский Павел
    - https://github.com/flomikoon/Currency-Conversion
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - Ветка `feature` не является должноживущей. Она создаётся под каждую фичу, и закрывается после мерджа.
            - Ветка `develop` не мерджится на прямую в `master`
            - Разобраться с `.gitconfig`
            - Служебные файлы (`.idea`) нужно закрывать от индексирования через `.gitignore`
    - HW2:
        * Status: Done (Jan 12)
        * Notes:
            - Если игнорировать замечания, то тяжело чему-то научиться. Всё так же: Разобраться с `.gitconfig` и `.gitignore`
- Рубан Станислав
    - https://gitlab.com/pupptmstr/ass
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Все чувствительные данные (пароли к БД, токены доступа к API) не должны попадать в репозиторий. Для этого нужно использовать либо сервисы управления серкретами, либо сделать передачу через переменные окружения
            - не все фичи доведены до мерджа с основной веткой
            - не очень понимаю, что такое `.run`, но подозреваю что это должно быть за `.gitignore`
            - разобраться с `.gitconfig`
    - HW2:
        * Status: Done (Jan 14)
        * Notes:
            -
- Смирнов Лев
    - https://github.com/Lion-Hunter/UsdToEurConverter
    - HW1:
        * Status: Done (Dec 1)
        * Notes:
            - ветка `dev` не должна мерджиться в `main`, для этого есть `release`
            - в `main` напрямую ничего коммитить нельзя, для этого есть `hotfix`
            - для `feature`-веток стоит использовать префикс `feature/`
            - в комментарии к коммиту рекомендуется использовать номер `issue`, или отвечать на вопрос "зачем" делаются эти изменения
- Кейта Абубакар Сидики
    - https://github.com/Keita18/currencyConverter
    - HW1:
        * Status: Done (Dec 13)
        * Notes:
            - Разобраться с `.gitconfig`
            - Нельзя делать прямые коммиты в `develop`
            - Ветка `develop` не должна мерджиться в `master`
    - HW2:
        * Status: Done (Jan 18)
        * Notes:
            - Нет файла лицензии
            - нет возможности запускать тесты руками
- Федоров Сергей
    - https://github.com/Joker707/vol_converter
    - HW1:
        * Status: Done (Jan 17)
        * Notes:
            - Всё очень путанно (явно есть проблемы с тем, откуда форкались ветки), но хотя бы ветки есть.
    - HW2:
        * Status: Done (Jan 18)
        * Notes:
            - А где сами тесты? Кроме проверки на собираемость...
- Чернышев Ярослав
    - https://github.com/Jar-Cher/SoftEngPrj
    - HW1:
        * Status: Done (Jan 18)
        * Notes:
            - что-то странное с тем, как изменения из `develop` попали в `master`, т.е. мердж как-то криво сделан, но сейчас хотя бы есть ветки.
    - HW2:
        * Status: Done (Jan 18)
        * Notes:
            - У коммита `e80c801d7491159a84334461bf2ba18dde252557` только один предок. А он должен быть результатом мерджа ветки `release` в ветку `master`
            - Каким образом вдруг `3bd43da1a51e94949521ed43ac37cbb3ecd30c76` имеет родителем коммит в `master`, если он должен форкаться от `develop`?
            - Нет возможности запускать руками
- Смирнов Никита
    - https://github.com/3oDoR/TemperatureConverter
    - HW1:
        * Status: Done (Jan 12)
        * Notes:
            - Стоило бы уже придерживаться TBD... `master` должен быть такой же долгоживущей веткой, как и `develop`. Теперь для второй лабы нужно всё сделать очень аккуратно, учитывая нынешнюю конфигурацию веток.
            - Исправить `gitconfig` (<https://github.com/3oDoR/TemperatureConverter/commits/develop>)
    - HW2:
        * Status: NOT Done (Jan 18)
        * Notes:
            - Судя по наличию ветки `main`, думаю что это git-flow. В `README.md` ни одного бейджика
            - Всё те же проблемы с `.gitconfig`
- Лихолетов Михаил
    - https://github.com/McCreeMainer/urban-dictionary-app
    - HW1:
        * Status: Done (Jan 18)
        * Notes:
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
    - HW2:
        * Status: Done (Dec 28)
        * Notes:
            - Не очень понял, откуда форкнута ветка `hotfix`. Такое чувство, что от `116f4bf`, хотя должна от `32c6e50`. И, кстати, там тоже нужно версию поднять. Новый коммит в `master` -- новый релиз.
- Никифоров Тимофей
    - https://github.com/nikiforovta/Software-Engineering-lab1
    - HW1:
        * Status: Done (Nov 23)
        * Notes:
            - Я вижу `master` и `main`. Это просто взрыв мозга, я не понимаю какой подход к управлению ветками тут используется.
            - В `git-flow` нет ветки, с именем `bugfix`.
            - Для линковки коммитов с задачами, в комментарии к коммиту указывается номер `issue`, т.е. руками `issue` закрывать не нужно
    - HW2:
        * Status: Done (Jan 3)
        * Notes:
            - Добавить возможность запускать тесты руками
            - Даже в Trunk Based Development мы не делаем прямые коммиты в `master`
- Алексей Бедрин
    - https://github.com/HaveAHeart/AvgDailyTemperature
    - HW1:
        * Status: Done (Nov 27)
        * Notes:
            - был отличный граф коммитов... Пока `develop` не улетел прямо в `master`. Это можно было сразу пофиксить ревертом коммита.
            - В `feature`-ветках (как и в `hotfix` и `release`) рекомендуется префикс такого вида `feature/` (с символом `/`). Это позволяет всяким графическим средам удобно группировать ветки.
            - В комментарии к коммиту можно указывать номер `issue` для связи через символ `#`
    - HW2:
        * Status: Done (Dec 27)
            - Ветка `release` форкается не от `init`, а от `develop`, в тот момент когда ты готов сделать новый релиз. И тогда нет необходимость делать коммиты в `develop` для красоты -- она и так будет продолжаться.
- Джеус Андрей
    - https://github.com/MickeyMouseMouse/Software-Engineering-labs
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Ветка `develop` не должна мерджиться в `master`, для этого есть `release/`
    - HW2:
        * Status: Done (Dec 28)
        * Notes:
            - Ветка `release` форкается от `develop`. Потому она и называется короткожевущей)
- Невоструева Яна
    - https://github.com/NevostruevaYana/Software-Engineering-2021-lab1
    - HW1:
        * Status: Done (Dec 12)
        * Notes:
            - `develop` и `master` не могут мерджиться друг в друга
    - HW2:
        * Status: Done (Jan 8)
        * Notes:
            - Осталось ещё `hotfix/` вернуть в `develop`
- Медведев Данил
    - https://github.com/dVede/ConsoleWeatherApp
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - под конец `develop` был замерджен в `master`
            - Хорошей практикой считается разделять префикс `feature` от описание ветки символом `/`
    - HW2:
        * Status: Done (Jan 17)
        * Notes:
            - Должно быть два беджика, для каждой из долгоживущих веток
- Шрамков Максим
    - https://github.com/k1unk/engineering_lab_1
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - `feature`-ветки должны иметь префикс `feature/`
            - каждая `feature`-ветка форкается от `develop`, и туда же возвращается
            - в `main` изменения попадают через `felease/`
            - скрыть `.idea` под `.gitignore`
    - HW2:
        * Status: NOT Done (Jan 17)
        * Notes:
            - Утеряна вся история изменений, это необходимо восстановить. Не вижу `issues` и линковки с ними.
            - Не работает `Dockerfile`. В `Dockerfile` необходимо описать сборку бинарного файла из исходников.
            - скрыть `.idea` под `.gitignore`: бинарные файлы в репозитории появляться не должны! `git` это система версионирования кода, а не бинарных артефактов.
            - папки `target` с бинарниками в репозитории быть не должно
            - не очень понятно что вообще тестируется? Какой тест-кейс?
- Хвацкин Леонид
    - https://github.com/TheGreenBeaver/Too-Doo
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Вроде всё так красиво, но почему `master` и `develop` в конце указывают на один коммит?
            - Предлагаю ещё в GitHub оформить как релиз, чтоб вообще законченный проект был (https://github.com/TheGreenBeaver/Too-Doo/releases)
    - HW2:
        * Status: Done (Jan 17)
        * Notes:
            - Всё красиво, но нужно добавить возможность запуска `workflow` руками.
- Рубша Анастасия
    - https://github.com/Valkiriya228/SoftwareEngLabFirst
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Я так понимаю, это попытка Trunk Based Development. Мы каждую новую `feature` форкаем от главной ветки, и обратно её туда сливаем. Теоретически возможна ситуация, когда мы `feature`-ветку форкаем от `feature`-ветки же, но это крайне не типично для Trunk Based Development (собственно одно из его основных назначений - бороться с такими ситуациями).
            - служебные директории (`.idea`) не должны попадать в кодобазу (`.gitignore`).
    - HW2:
        * Status: Done (Jan 9)
        * Notes:
            - служебные директории (`.idea`) не должны попадать в кодобазу (`.gitignore`).
- Астудина Анастасия
    - https://github.com/astudina/SoftwareEngineering-Lab1
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Даже такие задачи, как добавление лицензии или картинки должны решаться через соответствующие `feature/` ветки, нельзя коммитить прямо в `master`
            - Веткам лучше давать более осмысленные названия, это поможет в будущем не запутаться
    - HW2:
        * Status: Done (Jan 17)
        * Notes:
            - Нет возможности ручного запуска `workflow`
            - Не должно быть прямых коммитов в `master` (откатить последний коммит)
- Зайцева Елизавета
    - https://github.com/LizaZaytseva/SE_lab1_converter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Третья похожая по стилю работа... Ну ладно. Важно другое, важно не перемешивать ветки при Trunk Based Development.
            - Ну и `Docker` это скорее про демоны, чем про обёртку над интерактивными `cli` утилитами
    - HW2:
        * Status: Done (Jan 17)
        * Notes:
            - Как и у Анастасии: убрать последний коммит из `master` и (через `feature` ветку) исправить `workflow` для возможности запускать руками
            - убрать из репо служебную папку `IDE`, скрыть её за `.gitignore`
- Васильев Роман
    - https://github.com/killawetz/Software-Engineering-lab1
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - `develop` не ходит в `master`, для этого есть `release`
            - нужно поместить вызов `gradle` в `Dockerfile`, чтобы это работало
    - HW2:
        * Status: Done (Jan 9)
        * Notes:
            - Нельзя делать прямые коммиты в `master` ветку!!
- Курняков Пётр
    - https://gitlab.com/pupptmstr/ass
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Пароли к БД стоит передавать через переменные окружения
            - разобраться с `.gitconfig`
    - HW2:
        * Status: Done (Jan 14)
        * Notes:
            -
- Танашкин Валерий
    - https://github.com/NastyPill/JokesService
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - в `main` ветку так ничего и не попало, нужно сделать `release` ветку для завершения проекта
            - `feature` векти остались висеть в воздухе... Нужно сделать PR, и мерж коммит, чтоб история изменений оставалась последовательной.
    - HW2:
        * Status: Done (Jan 16)
        * Notes:
            - не должно быть прямых коммитов в `master`
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
    - HW2:
        * Status: Done (Jan 18)
        * Notes:
            - не учтены замечания к первой работе, всё так же бинарник в репозитории и неработающий `Dockerfile`
            - прямые коммиты в `master` и `develop`
            - бейджы только для одной ветки
- Трачук Илья
    - https://github.com/kuchartI/QuizApp
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Ветки в реализацией функционала, оказались форкунты от `master` и слиты в `release`... Как это вообще пришло в голову?
            - на данный момент `develop` и `master` указывают на один коммит! А новый `release` просто висит в воздухе.
    - HW2:
        * Status: Done (Jan 18)
        * Notes:
            - `develop` непонятно куда указывает, но явно не туда, куда нужно
- Филимонов Артем
    - https://github.com/BigArtemka/Kanye-Quote-And-Cat-Picture-API/
    - HW1:
        * Status: Done (Dec 11)
        * Notes:
            - Всё ОК, только `develop` указывает на коммит в `release/...` ветке. Чтоб такого не было, `relese` должен мерджиться в `master`, а потом обратно в `develop`.
            - Хорошей практикой для управления версиями было бы положить отдельный файл с версией в репо (либо читать `git tag`), и читать оттуда версию при сборке `JAR`-ника.
    - HW2:
        * Status: Done (Jan 18)
        * Notes:
            -
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
        * Status: Done (Dec 25)
        * Notes:
            - Нет управления ветками
    - HW2:
        * Status: Done (Jan 3)
        * Notes:
            - Обсудили в PRе
- Солянкин Илья
    - https://github.com/Evil-Enot/DegreeConverter/
    - HW1:
        * Status: Done (Nov 29)
        * Notes:
            - Изменения из `release` не вернулись в `develop`
            - Короткоживущие ветки следует отделять символом `/`
            - Разобраться с `.gitconfig` (см. коммит `48c9ae7`)
    - HW2:
        * Status: Done (Dec 24)
        * Notes:
            - Осталось прикрутить бейджики в `README.md`. Это можно сделать через `hotfix/`, и увеличив версию до 1.1.1. Важно не забыть замерджить этот `hotfix/` не только в `master`, но и в `develop`.
- Ляшенко Валерия
    - https://github.com/LyashenkoValeria/TempConverter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - нужно только изменения из `hotfix` вернуть обратно в `develop`, а то их можно потерять...
    - HW2:
        * Status: Done (Dec 30)
        * Notes:
            - В обычной жизни всё же не стоит так часто использовать `hotfix`)))) Обычно, это признак того, что QA хлопнули ушами и пропустили баг на прод...
- Рамис Сахибгареев
    - https://github.com/rapturemain/currency-converter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - В Trunk Based Development нам не нужна как таковая ветка `release`, там мы активно используем теги
            - Если есть желание разделить ветки по назначению (`feature` vs `ops`), лучше импользовать префикс разделённый символом `\`
    - HW2:
        * Status: Done (Jan 12)
        * Notes:
            - Строго говоря, мы оговаривали для каких веток должен тригериться CI...    
- Шелаев Никита
    - https://github.com/ShelaevNikita/Currency_converter
    - HW1:
        * Status: Done (Nov 30)
        * Notes:
            - Нельзя делать прямые коммиты в `master`. Только `release` и `hotfix` попадают в `master`.
            - Комментарий к коммиту должен объяснять для чего делаются эти изменения.
            - Я не уверен, что `venv` нужен внутри `Docker`, т.к. `Docker` уже даёт более строгие гарантии изоляции
    - HW2:
        * Status: Done (Dec 22)
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
    - HW2:
        * Status: NOT Done (Jan 17)
        * Notes:
            - Нельзя делать прямые коммиты в `master`, их нужно убрать.
            - Навести порядок в `.gitconfig`
            - по условию задачи, беджики должны быть у обеих веток
            - нет возможности запустить тесты руками
- Dimukhametov Marat
    - https://github.com/maratdin7/file-storage
    - HW1:
        * Status: Done (Dec 6)
        * Notes:
            - В `develop` 2 раза сходил в `master`, для этого нужно использовать `release`.
            - Прямой коммит в `develop` с бампов мерсии (`12a1b96`), для этого лучше использовать `release`
            - Ещё один прямой коммит, для которого нужно использовать `feature` (`1ef1090`). Рефакторинг не несёт прямой ценности для бизнеса (читать Фаулера).
            - ветка `hotfix` не возвращена в `develop` (`d1116cd`).
    - HW2:
        * Status: Done (Jan 15)
        * Notes:
            - 
- Петров Виталий
    - https://github.com/ADsty/temperature_convertor
    - HW1:
        * Status: Done (Dec 6)
        * Notes:
            - Разобраться с `gitconfig` (https://github.com/ADsty/temperature_convertor/commits/main)
            - Вижу попытку разобраться с `release`, но получился какой-то треш: мы форкается от `develop`, и мерджимся в `master` (при необходимости, обратно в `develop` тоже)
    - HW2:
        * Status: Done (Jan 18)
        * Notes:
            - Почему `develop` и `main` указывают на один коммит??..
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
