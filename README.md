# [mariarabelero.github.io](https://mariarabelero.github.io/)

## Introduction
Hi! Welcome to my site's repo. I'm an IT & full stack developer. I used several great tools like Yarn, Yeoman, and Gulp. Hope you mew it ♥

## Dependencies
This site was build using [Kittn's framework](http://kittn.de).
- Yarn's [Kittn package](https://yarnpkg.com/en/package/generator-kittn).
- Yeoman's [Kittn generator](https://github.com/kittn/generator-kittn).
- [fullPage.js](https://github.com/alvarotrigo/fullPage.js) script.
- [Lane](https://www.fontsquirrel.com/fonts/Lane) font.
- [Daniel](https://www.fontsquirrel.com/fonts/daniel) font.
- [A Little Sunshine](http://www.dafont.com/es/a-little-sunshine.font) font.

## Installation

### Active Projects
The generator will create the project for the first time. When this process is finished, the generator is no longer needed. Other project members only need to load the repo to install the NPM and Bower packages and run the Init task.

```
$ npm install && bower install && gulp init && gulp
```

### Using Webpack
Install NPM-Modules via

```
$ npm install
# OR
$ yarn
```

Then run

```
# Development initialization
$ npm run init

# Develop-Mode with file-watch
$ npm run dev

# Copy HTML-Assets and Images
$ npm run uiimages && npm run htmlassets

# Build for production
$ npm run build

# Copy Assets into Astrum Styleguide
$ npm run assets
```

### Expanding
Just put the new plugin on ```package.json```, and run:

```
npm install packagename --save-dev
```

## Inspiration
mariarabelero.github.io is inspired by:
- [Mobile HTML5 Boilerplate](https://html5boilerplate.com/mobile/).
- [HTML5 Rocks](https://github.com/html5rocks/www.html5rocks.com).

## Licence
MIT
