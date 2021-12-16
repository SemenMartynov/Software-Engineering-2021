## TCP чат

При запуске требуется указать IP. В случае если его не указать будет установлен адресс 127.0.0.1

## Задачи

## Технологии

Python

## Запуск докера

- docker build -t docker_tcp .
- docker run -t -p 55555:55555 --name serv_py docker_tcp python server.py
- В другом терминале запустить клиентов, для наблюдения работы требуется минимум 2 клиента:
- docker run -t -i docker_tcp python client.py
