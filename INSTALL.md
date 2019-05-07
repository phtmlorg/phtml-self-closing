# Installing pHTML Self Closing

[pHTML Self Closing] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML Self Closing] to your project:

```bash
npm install @phtmlorg/self-closing --save-dev
```

Use [pHTML Self Closing] to process your HTML:

```js
const phtmlSelfClosing = require('@phtmlorg/self-closing')

phtmlSelfClosing.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlSelfClosing = require('@phtmlorg/self-closing')

phtml([
  phtmlSelfClosing(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/self-closing
```

Alternatively, add [pHTML Self Closing] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/self-closing', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML Self Closing] to your Eleventy project:

```sh
npm install @phtmlorg/self-closing @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML Self Closing] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlSelfClosing = require('@phtmlorg/self-closing')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlSelfClosing(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML Self Closing] to your project:

```bash
npm install @phtmlorg/self-closing gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML Self Closing] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlSelfClosing = require('@phtmlorg/self-closing')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlSelfClosing(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML Self Closing] in your Gruntfile:

```js
const phtmlSelfClosing = require('@phtmlorg/self-closing')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlSelfClosing(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML Self Closing]: https://github.com/phtmlorg/phtml-self-closing
