'use strict'

const template = require('lodash/template')

module.exports = {
  url: 'github.com/nodewell/nodewell.github.io.git',
  message: template('chore(release): <%= version %>')
}
