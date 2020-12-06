# Прохождение видеокурса по WEBPACK

**Playlist:** [Youtube playlist](https://www.youtube.com/playlist?list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV)

**Описание:** В рамках данного плейлиста мы с нуля настроим полноценную сборку на WEBPACK 4, с применением различных библиотек и плагинов.

**Автор:** [Jack Coder](https://www.youtube.com/channel/UCDtQ4kJos22sCdYtNDB_4Cg)

---
<a id="contain"></a>
## Содержание
 - [Начальное знакомство с Webpack](#lesson_1)
 - [Подкючеиие препроцессоров](#lesson_2)

---

<a id="lesson_1"></a>
## Начальное знакомство с Webpack

[Настройка Webpack 4 шаблона. Установка Babel 7 и webpack dev server. Настройка js на примере vue.](https://www.youtube.com/watch?v=JcKRovPhGo8&list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV)

В этом видео мы настроим шаблон Webpack 4, подключим babel 7, а также разберемся с  webpack dev server.  Подключим js библиотеки на примере vue.js и bootstrap, настроим loaders.

[Содержание ^](#contain)

<a id="lesson_2"></a>
## Подкючеиие препроцессоров

[Полная настройка Webpack 4 препроцессоров. Sass, настройка post css плагинов, минификация стилей.](https://www.youtube.com/watch?v=qqTIqwQX8nc&list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV&index=2)

В этом видео мы продолжим настраивать шаблон Webpack 4. Подключим mini-css-extract-plugin для SCSS (Sass) препроцессора, также разберемся с другими препроцессорами. Подключим  post CSS плагины: autoprefixer, css-mqpacker, cssnano.

Дополнительно сделано:

- убраны дублирующие стили в `main.scss`;
- изменены `media` запросы на `mobileFirst`;
- убраны ошибки от postcss-loader (теперь он сам ищет файл `postcss.config.js`);
- удалены `warning'и` от `MiniCssExtractPlugin`.

[Содержание ^](#contain)
