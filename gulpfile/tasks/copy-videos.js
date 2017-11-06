/**
 * Copy Videos Files
 * @description Copy all videos into the Assets Lib Directory
 */

import kc from '../../config.json'
import gulp from 'gulp'

const copyVideos = () => {
  gulp
    .src(kc.src.videos + '**')
    .pipe(gulp.dest(kc.dist.videos))
}

gulp.task('copy:videos', copyVideos)
module.exports = copyVideos
