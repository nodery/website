const gulp = require('gulp')
const path = require('../../data/path')
const travis = require('is-travis')
const directory = require('directory-exists')
const glob = require('fast-glob')
const log = require('fancy-log')
const color = require('ansi-colors')

const git = require('simple-git/promise')
const execa = require('execa')

console.log(process.env)

gulp.task('deploy', async () => {
  const token = process.env.GH_TOKEN

  if (!token) {
    throw Error('GitHub token is not present.')
  }

  const repository = `https://${token}@github.com/nodewell/nodewell.github.io.git`

  // const { stdout } = await execa('git', ['clone', repository], { cwd: path.deploy })
  // const { stdout } = await execa('git', ['clone', repository, path.deploy])
  // console.log(stdout)

  // await execa('git', ['clone', repository, path.deploy])

  // if (!travis) {
  //   throw Error('Script can be executed only in Travis CI.')
  // }

  const exists = await directory(path.build)

  if (!exists) {
    throw Error('Build directory doesn\'t exist.')
  }

  // const files = await glob('**/*.*', { cwd: path.build })
  const files = await glob(path.build + '/**/*.*')

  if (files.length === 0) {
    throw Error('Build directory is empty.')
  }

  console.log(files)

  // const dir = await glob(path.build + '/')
  // console.log(dir)

  // console.log(process.argv)
  // log.info('Check "build" directory' + color.cyan('YEAH!'))

  // log.info(process.argv)
  await gulp
})
