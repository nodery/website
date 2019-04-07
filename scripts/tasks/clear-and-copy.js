'use strict'

const gulp = require('gulp')

require('./clear-build')
require('./copy-vendors')

gulp.task('clear-and-copy', gulp.series(
  'clear-build',
  'copy-vendors'
))
