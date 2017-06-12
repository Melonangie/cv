/**
 * Copy Static Files
 * @description Copy the static Files to distribution
 */

import kc from '../../config.json'
import gulp from 'gulp'
import gutil from 'gulp-util'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

const copyStaticTask = () => {
  gulp
    .src(kc.files.static)
    .pipe(gulp.dest(kc.dist.base))
}

gulp.task('copy:static', copyStaticTask)
module.exports = copyStaticTask
