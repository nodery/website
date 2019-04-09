'use strict'

const sass = require('node-sass')
const utils = require('node-sass-utils')(sass)

const DEFAULT_FALLBACK = utils.castToSass('#FF0000')

module.exports = data => {
  return {
    'get-data($key, $fallback: null)': (key, fallback) => {
      if (utils.isNull(fallback)) {
        fallback = DEFAULT_FALLBACK
      }

      if (utils.typeOf(key) !== 'string') {
        return fallback
      }

      key = key.getValue()

      if (key === '') {
        return fallback
      }

      const parts = key.split('.')
      const len = parts.length

      let map = data

      if (!map) {
        return fallback
      }

      for (let i = 0, part; i < len; i++) {
        part = parts[i]

        if (part in map) {
          map = map[part]
        } else {
          map = null
        }
      }

      if (map === null) {
        return fallback
      }

      return utils.castToSass(map)
    }
  }
}
