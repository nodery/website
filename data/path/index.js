'use strict'

const path = require('path')
const ROOT = path.resolve(__dirname, '../../')

module.exports = {
  root: ROOT,
  build: path.join(ROOT, '/build'),
  deploy: path.join(ROOT, '/deploy'),
  node_modules: path.join(ROOT, '/node_modules')
}
