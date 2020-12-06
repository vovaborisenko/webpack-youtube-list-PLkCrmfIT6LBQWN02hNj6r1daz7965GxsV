<a id="top"></a>
# Прохождение видеокурса по WEBPACK

**Playlist:** [Youtube playlist](https://www.youtube.com/playlist?list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV)

**Описание:** В рамках данного плейлиста мы с нуля настроим полноценную сборку на WEBPACK 4, с применением различных библиотек и плагинов.

**Автор:** [Jack Coder](https://www.youtube.com/channel/UCDtQ4kJos22sCdYtNDB_4Cg)

---
<a id="contain"></a>
## Содержание
 - [Начальное знакомство с Webpack](#lesson-1)
 - [Подкючеиие препроцессоров](#lesson-2)
 - [Разделение `webpack.config`. Обработка изображений и `HTML`](#lesson-3)
 - [Подключение `VUE` и `VUEX`](#lesson-4)

---

<a id="lesson-1"></a>
## Начальное знакомство с Webpack

[Настройка Webpack 4 шаблона. Установка Babel 7 и webpack dev server. Настройка js на примере vue.](https://www.youtube.com/watch?v=JcKRovPhGo8&list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV)

В этом видео мы настроим шаблон Webpack 4, подключим babel 7, а также разберемся с  webpack dev server.  Подключим js библиотеки на примере vue.js и bootstrap, настроим loaders.

[Содержание ↑](#contain)

<a id="lesson-2"></a>
## Подкючеиие препроцессоров

[Полная настройка Webpack 4 препроцессоров. Sass, настройка post css плагинов, минификация стилей.](https://www.youtube.com/watch?v=qqTIqwQX8nc&list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV&index=2)

В этом видео мы продолжим настраивать шаблон Webpack 4. Подключим mini-css-extract-plugin для SCSS (Sass) препроцессора, также разберемся с другими препроцессорами. Подключим  post CSS плагины: autoprefixer, css-mqpacker, cssnano.

Дополнительно сделано:

- убраны дублирующие стили в `main.scss`;
- изменены `media` запросы на `mobileFirst`;
- убраны ошибки от postcss-loader (теперь он сам ищет файл `postcss.config.js`);
- удалены `warning'и` от `MiniCssExtractPlugin`.

[Содержание ↑](#contain)

<a id="lesson-3"></a>
## Разделение `webpack.config`. Обработка изображений и `HTML`

[Самое важное по WEBPACK 4 - обработка картинок и html. Webpack-merge. Обработка статических файлов](https://www.youtube.com/watch?v=QF3EcxymIcc&list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV&index=3)

Это будет самое важное видео по webpack. Обработаем все возможные файлы, картинки (изображения) и статичные файлы при помощи плагина copy-webpack-plugin. Также подключим Webpack-merge - для разбивание dev и build конфига. Настроим карту для стилей. Сделаем livereload для html.

Дополнительно сделано:

- настройка `webpack.config` под текущие версии `webpack-merge`, `copy-webpack-plugin`.

[Содержание ↑](#contain)

<a id="lesson-4"></a>
## Подключение `VUE` и `VUEX`

[WEBPACK 4. Подключение VUE и VUEX, забываем jQuery. Использование vuejs в верстке.](https://www.youtube.com/watch?v=LXkSIqqgyPI&list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV&index=4)

Webpack 4, подключение и использование VUE и VUEX, использование Vue.js в верстке. Регистрация и использование vue компонентов. Забываем jQuery и переходим на vue.js!

Дополнительно сделано:

- поддержка IE10;
- загружаются автоматически все vue компоненты.

[Содержание ↑](#contain)

[Наверх ↑](#top)
