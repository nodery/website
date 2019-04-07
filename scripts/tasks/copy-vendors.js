'use strict'

const gulp = require('gulp')
const path = require('../../data/path')

gulp.task('copy-vendors', async () => {
  await gulp
    .src([
      '/bootstrap/dist/css/bootstrap.min.*',
      '/bootstrap/dist/js/bootstrap.min.*',
      '/jquery/dist/jquery.min.*',
      '/popper.js/dist/umd/popper.min.*'
    ].map(p => `${path.node_modules}${p}`))
    .pipe(gulp.dest(`${path.build}/vendors`))
})
