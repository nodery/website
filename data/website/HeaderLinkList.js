'use strict'

/**
 * @typedef {Object} HeaderLinkEntry
 *
 * @property {string} title
 * @property {string} href
 */

class HeaderLinkList {
  /**
   * @param {HeaderLinkEntry[]} linkList
   */
  constructor (linkList) {
    this._linkList = linkList
  }

  [Symbol.iterator] () {
    return this._linkList.values()
  }
}

module.exports = HeaderLinkList
