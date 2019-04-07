const path = require('path')
const ROOT = path.resolve(__dirname, '../../')

function resolve (pathFragment) {
  return path.join(ROOT, pathFragment)
}

module.exports = {
  root: ROOT,
  dist: resolve('/dist'),
  node_modules: resolve('/node_modules')
}
