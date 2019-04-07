const gulp = require('gulp')
const paths = require('./paths')

gulp.task('copy-vendors', async () => {
  await gulp
    .src([
      '/bootstrap/dist/css/bootstrap.min.*',
      '/bootstrap/dist/js/bootstrap.min.*',
      '/jquery/dist/jquery.min.*',
      '/popper.js/dist/umd/popper.min.*'
    ].map(path => `${paths.node_modules}${path}`))
    .pipe(gulp.dest(`${paths.dist}/vendors`))
})
