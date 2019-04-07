const gulp = require('gulp')

require('./clear-dist')
require('./copy-vendors')

gulp.task('clear-and-copy', gulp.series(
  'clear-dist',
  'copy-vendors'
))
