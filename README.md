# Youtube search app

Данный проект представляет собой веб-приложение для поиска видео на Youtube с возможностью добавлять любимые запросы, редактировать и удалять их.

Регистрации и бд с пользователями нет, в файле src/utils/users.js хранятся два пользователя для входа: login: qwe, password: qwe и login: 123, password: 123.

Запросы хранятся в localStorage по токену.

Если поиск не работает, то значит превышена квота по запросам в день.

Ссылка на GitHub Pages: https://nightofnights.github.io/sibdev-youtube-search.

## Инструкция по запуску

Для установки всех необходимых пакетов нужно прописать в терминале:

### `npm install`

Для запуска приложения нужно прописать в терминале:

### `npm start`

Для просмотра нужно открыть [http://localhost:3000](http://localhost:3000) в браузере.

Для сборки проекта нужно прописать в терминале:

### `npm build`
