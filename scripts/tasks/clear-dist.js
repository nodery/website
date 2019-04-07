const gulp = require('gulp')
const del = require('del')
const paths = require('./paths')

gulp.task('clear-dist', async () => {
  await del(paths.dist, { force: true })
})
