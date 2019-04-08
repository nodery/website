const gulp = require('gulp')
const travis = require('is-travis')
const execa = require('execa')
const directory = require('directory-exists')
const glob = require('fast-glob')
const delay = require('delay')
const semver = require('semver')

const deploy = require('../../data/config/deploy')
const path = require('../../data/path')

gulp.task('deploy:prepare-repository', async () => {
  // check CI environment
  if (!travis) {
    throw Error('Script can be executed only in Travis CI.')
  }

  // check token
  const token = process.env.GH_TOKEN

  if (!token) {
    throw Error('GitHub token is not present.')
  }

  // clone repository into a deploy directory
  await execa('git', ['clone', `https://${token}@${deploy.url}`, path.deploy])
})

gulp.task('deploy:prepare-content', async () => {
  // check build directory
  const exists = await directory(path.build)

  if (!exists) {
    throw Error('Build directory doesn\'t exist.')
  }

  // gather files
  const files = await glob('**/*.*', { cwd: path.build })

  if (files.length === 0) {
    throw Error('Build directory is empty.')
  }

  // clear deploy repository (delete all files)
  await execa('git', ['rm', '-r', '*'], { cwd: path.deploy })

  // copy build files to deploy repository
  await gulp
    .src(files, { cwd: path.build })
    .pipe(gulp.dest(path.deploy))

  // wait for a while for the files to be completely copied
  await delay(2500)

  // process passed next version number
  const arg = process.argv[process.argv.length - 1] || ''
  const version = arg.substring(2)

  if (semver.valid(version) === null) {
    throw Error('Version is invalid.')
  }

  // commit files with next version
  await execa('git', ['add', '.'], { cwd: path.deploy })
  await execa('git', ['commit', '-m', deploy.message({ version })], { cwd: path.deploy })
})

gulp.task('deploy:push-content', async () => {
  // push content to remote repository
  await execa('git', ['push', '-u', 'origin', 'master'], { cwd: path.deploy })
})

gulp.task('deploy', gulp.series(
  'deploy:prepare-repository',
  'deploy:prepare-content',
  'deploy:push-content'
))
