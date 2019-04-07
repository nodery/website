'use strict'

/**
 * @typedef {Object} TitleOptions
 *
 * @property {string} short
 * @property {string} full
 */

class Title {
  /**
   * @param {TitleOptions} options
   */
  constructor (options) {
    this._short = options.short
    this._full = options.full
  }

  get short () {
    return this._short
  }

  get full () {
    return this._full
  }

  toString () {
    return this._full
  }
}

module.exports = Title
