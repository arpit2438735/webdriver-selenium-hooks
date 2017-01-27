# webdriver-selenium-hooks
> Webdriver configuration hooks for starting and stopping selenium standalone server with PhantomJS.

[![Build Status](http://img.shields.io/travis/wilmoore/node-wd-selenium-hooks.svg)](https://travis-ci.org/wilmoore/node-wd-selenium-hooks) [![Code Climate](https://codeclimate.com/github/wilmoore/node-wd-selenium-hooks/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/node-wd-selenium-hooks) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install wd-selenium-hooks --save-dev
```

> You can also [download the files manually](https://github.com/wilmoore/node-wd-selenium-hooks/releases).

## Copy of node-wd-selenium-hooks
1. Because I or no one can't fork it.
2. There is no development for a long time.

###### npm stats

[![npm](https://img.shields.io/npm/v/wd-selenium-hooks.svg)](https://www.npmjs.org/package/wd-selenium-hooks) [![NPM downloads](http://img.shields.io/npm/dm/wd-selenium-hooks.svg)](https://www.npmjs.org/package/wd-selenium-hooks) [![Dependency Status](https://gemnasium.com/wilmoore/node-wd-selenium-hooks.svg)](https://gemnasium.com/wilmoore/node-wd-selenium-hooks)

## Usage

In your `wdio.config.js` add the following:

```js
var selenium = require('wd-selenium-hooks')

exports.config = {

  onPrepare: function () {
    selenium.onPrepare(this)
  },

  onComplete: function () {
    selenium.onComplete(this)
  }

}
```

## API

### `.onPrepare(this)`

Starts the selenium server.

###### arguments

 - `object (this)` Reference to the configuration.

###### returns

 - `(Undefined)`

### `.onComplete(this)`

Stops the selenium server.

###### arguments

 - `object (this)` Reference to the configuration.

###### returns

 - `(Undefined)`

## Reference

 - [WebdriverIO Configuration](http://www.webdriver.io/guide/getstarted/configuration.html)

## Alternatives

 - [Alternative approach using promises](https://gist.github.com/klamping/f48f3167775e483e712e)

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/node-wd-selenium-hooks.svg)](https://github.com/wilmoore/node-wd-selenium-hooks/blob/master/license)
