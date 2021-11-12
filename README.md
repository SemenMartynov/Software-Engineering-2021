# Веб приложение для конвертации температур

## 1 экран:

- Форма i : указываем температуру в системе N
- Форма i+1 : показывает температуру в системе M

## Задачи:

https://docs.google.com/spreadsheets/d/17WCuGWmdy8AWWh7hM4yuJ_wCs6Ei9Ee8VOFx8M1PnBo/edit#gid=0

### Технологии:

- React
- TypeScript
- mobX

### Docker

- Собрать: docker build . -t temperature-service
- Запустить: docker run -p 8080:80 temperature-service
- Открыть в браузере http://localhost:8080/

### Использование

- Ввести значение температуры в поле с исходной системой
- Нажать enter
