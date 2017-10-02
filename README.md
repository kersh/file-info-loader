[![npm version](https://badge.fury.io/js/file-info-loader.svg)](https://badge.fury.io/js/file-info-loader)
[![deps][https://david-dm.org/kersh/file-info-loader.svg]][https://david-dm.org/kersh/file-info-loader]

<div align="center">
  <h1>File Info Loader</h1>
  <p>A loader for webpack that lets you get file as a string as well as file full path.</p>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev file-info-loader
```

<h2 align="center">Usage</h2>

Use the loader either via your webpack config, CLI or inline.

### Inline

**In your application**
```js
import txt from 'file-info-loader!./file.txt';
import js from 'file-info-loader!./file.js';

console.log('txt:', txt);
// {path: 'FULL-FILE-PATH', content: 'FILE RAW CONTENT'}

console.log('js:', js);
// {path: 'FULL-FILE-PATH', content: 'FILE RAW CONTENT'}
```

### Via webpack config

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'file-info-loader'
      }
    ]
  }
}
```

**In your application**
```js
import txt from './file.txt';
```

<h2 align="center">Maintainers</h2>

Vladimir Shafikov