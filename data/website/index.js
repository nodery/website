'use strict'

const Title = require('./Title')
const HeaderLinkList = require('./HeaderLinkList')

module.exports = {
  title: new Title({
    short: 'nodewell',
    full: '@nodewell Official Website'
  }),
  canonical: 'https://nodewell.github.io',
  meta: {
    description: 'This is a meta description sample. We can add up to 160 characters.',
    url: 'https://nodewell.github.io'
  },
  header: {
    links: new HeaderLinkList([
      { title: 'Projects', href: '/projects' },
      { title: 'About', href: '/about' }
    ])
  },
  projects: {
    title: 'Projects'
  }
}
