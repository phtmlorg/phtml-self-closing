# Installing pHTML Self Closing

[pHTML Self Closing] runs in all Node environments, with special instructions for:

| [Node](#node) | [pHTML CLI](#phtml-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [pHTML Self Closing] to your project:

```bash
npm install @phtml/self-closing --save-dev
```

Use [pHTML Self Closing] to process your HTML:

```js
const phtmlSelfClosing = require('@phtml/self-closing');

phtmlSelfClosing.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlSelfClosing = require('@phtml/self-closing');

phtml([
  phtmlSelfClosing(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

## pHTML CLI

Add [pHTML CLI] to your project:

```bash
npm install phtml-cli --save-dev
```

Use [pHTML Self Closing] in your `phtml.config.js` configuration file:

```js
const phtmlSelfClosing = require('@phtml/self-closing');

module.exports = {
  plugins: [
    phtmlSelfClosing(/* pluginOptions */)
  ]
}
```

## Webpack

Add [pHTML Loader] to your project:

```bash
npm install phtml-loader --save-dev
```

Use [pHTML Self Closing] in your Webpack configuration:

```js
const phtmlSelfClosing = require('@phtml/self-closing');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'style-loader',
          { loader: 'html-loader', options: { importLoaders: 1 } },
          { loader: 'phtml-loader', options: {
            ident: 'phtml',
            plugins: () => [
              phtmlSelfClosing(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire pHTML] to your project:

```bash
npm install react-app-rewired react-app-rewire-html --save-dev
```

Use [React App Rewire pHTML] and [pHTML Self Closing] in your
`config-overrides.js` file:

```js
const reactAppRewirePHTML = require('react-app-rewire-phtml');
const phtmlSelfClosing = require('@phtml/self-closing');

module.exports = config => reactAppRewirePHTML(config, {
  plugins: () => [
    phtmlSelfClosing(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp pHTML] to your project:

```bash
npm install gulp-phtml --save-dev
```

Use [pHTML Self Closing] in your Gulpfile:

```js
const phtml = require('gulp-phtml');
const phtmlSelfClosing = require('@phtml/self-closing');

gulp.task('html', () => gulp.src('./src/*.html').pipe(
  phtml([
    phtmlSelfClosing(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [pHTML Self Closing] in your Gruntfile:

```js
const phtmlSelfClosing = require('@phtml/self-closing');

grunt.loadNpmTasks('grunt-phtml');

grunt.initConfig({
  phtml: {
    options: {
      use: [
       phtmlSelfClosing(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.html'
    }
  }
});
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML CLI]: https://github.com/phtmlorg/phtml-cli
[pHTML Loader]: https://github.com/phtmlorg/phtml-loader
[pHTML Self Closing]: https://github.com/phtmlorg/phtml-self-closing
[React App Rewire pHTML]: https://github.com/phtmlorg/react-app-rewire-phtml
[React App Rewired]: https://github.com/timarney/react-app-rewired
