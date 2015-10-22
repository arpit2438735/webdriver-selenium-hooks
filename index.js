'use strict'

/*!
 * imports.
 */

var format = require('util').format
var phantomJsBin = require('phantomjs-bin')
var selenium = require('selenium-standalone')

/*!
 * options.
 */

var startOptions = {
  spawnOptions: {
    stdio: 'inherit'
  },

  seleniumArgs: [
    format('-Dphantomjs.binary.path=%s', phantomJsBin.path)
  ]
}

/*!
 * exports.
 */

exports.onPrepare = onPrepare
exports.onComplete = onComplete

/**
 * Starts the selenium standalone server with PhantomJS driver loaded.
 */

function onPrepare (config, cb) {
  selenium.start(startOptions, onSeleniumStart(config, cb))
}

/**
 * Stops the selenium standalone server.
 */

function onComplete (config) {
  config.seleniumProcess.kill()
}

/**
 * Store reference to selenium child process or exit or error.
 */

function onSeleniumStart (config, cb) {
  return function onSeleniumStart (error, child) {
    if (error) {
      if (cb) return cb(error.message)
      process.stderr.write(error.message)
      process.exit(1)
    }

    config.seleniumProcess = child
    if (cb) { cb(null, child) }
  }
}
