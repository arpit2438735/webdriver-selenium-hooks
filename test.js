'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var selenium = require('./')

/*!
 * tests.
 */

test('wdSeleniumHooks()', function (t) {
  var config = {}

  selenium.onPrepare(config, function cb (error, child) {
    t.error(error, 'completes successfully')
    t.ok(config.seleniumProcess, 'config.seleniumProcess exists')
    if (config.seleniumProcess) { config.seleniumProcess.kill() }
    t.end()
  })
})
