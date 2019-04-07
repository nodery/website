'use strict'

const gulp = require('gulp')
const del = require('del')
const path = require('../../data/path')

gulp.task('clear-build', async () => {
  await del(path.build, { force: true })
})
