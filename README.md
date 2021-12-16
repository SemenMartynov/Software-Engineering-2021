# Веб приложение для просмотра информации о погоде в заданной локации

## 2 экрана:

- Форма где можно указать локацию / координаты / почтовый индекс (Только US,UK,Canada) / ip адрес
- Список локаций для отслеживания

## Задачи:

https://docs.google.com/spreadsheets/d/1R4HSV64-3IMvDYb94hel1UgXSU401k_iz7EehmjMnew/edit?usp=sharing

### Технологии:

- React
- TypeScript
- mobX

## API:

https://www.weatherapi.com/

### Docker

- Собрать: docker build . -t weather-service
- Запустить: docker run -p 8080:80 weather-service
- Открыть в браузере http://localhost:8080/

### Тестирование
* main 
[![CI](https://github.com/SukhachevN/Software-Engineering-2021/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/SukhachevN/Software-Engineering-2021/actions/workflows/main.yml)
* dev 
[![CI](https://github.com/SukhachevN/Software-Engineering-2021/actions/workflows/main.yml/badge.svg?branch=dev)](https://github.com/SukhachevN/Software-Engineering-2021/actions/workflows/main.yml)

