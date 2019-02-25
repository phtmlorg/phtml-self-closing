# pHTML Self Closing [<img src="https://phtmlorg.github.io/phtml/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Self Closing] lets you use self-closing tags in HTML.

```html
<div><div class="main"/></div>
<template><slot name="title"/></template>
<custom-element/>

<!-- becomes -->

<div><div class="main"></div></div>
<template><slot name="title"></slot></template>
<custom-element></custom-element>
```

**Note: The `<script>` and `<style>` tags are ignored.**

## Usage

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtml/self-closing
```

### Node

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

[pHTML Self Closing] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [pHTML CLI](INSTALL.md#phtml-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

### ignore

The `ignore` option defines self-closing elements that will not be expanded.

```js
phtmlSelfClosing({ ignore: 'a' });
```

```html
<a/>
<custom-element/>
<div/>

<!-- becomes -->

<a/>
<custom-element></custom-element>
<div></div>
```

The `ignore` option accepts a string or an array of strings.

```js
phtmlSelfClosing({ ignore: ['a', 'custom-element'] });
```

```html
<a/>
<custom-element/>
<div/>

<!-- becomes -->

<a/>
<custom-element/>
<div></div>
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-self-closing.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-self-closing
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/self-closing.svg
[npm-url]: https://www.npmjs.com/package/@phtml/self-closing

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Self Closing]: https://github.com/phtmlorg/phtml-self-closing
