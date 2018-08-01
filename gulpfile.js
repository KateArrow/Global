const gulp  = require('gulp'),
      watch = require('gulp-watch');

require('gulp-task-loader')();
let gulpsync = require('gulp-sync')(gulp);

const path = require('./config.gulp').path;

// Watch task config
const pug   = path.watch.pug,
      style = path.watch.style,
      js    = path.watch.js,
      img   = path.watch.img, 
      fonts = path.watch.fonts;

gulp.task('watch', () => {
  watch([pug],   (event, cb) => { gulp.start('pugBuild'); });
  watch([style], (event, cb) => { gulp.start('styleBuild'); });
  watch([js],    (event, cb) => { gulp.start('jsBuild'); });
  watch([img],   (event, cb) => { gulp.start(['imageBuild']); });
  watch([fonts], (event, cb) => { gulp.start('fontsBuild'); });
});

// SvgSpriteBuilder
gulp.task('svgSpriteBuild', gulpsync.sync([
  'svgRemoveSprite',
  'svgSpriteMonocolor',
  'svgSpriteMulticolor',
  'svgSpriteConcat',
  'svgRemoveTmp'
]));

// Zip file builder
gulp.task('zipFileBuild', gulpsync.sync([
  'zipDelete',
  'zip',
]));

// Development mode
gulp.task('dev', gulpsync.sync([
  'cleanDist',
  'pugBuild',
  'jsBuild',
  'pngSpriteCreate',
  'styleBuild',
  'fontsBuild',
  'svgSpriteBuild',  
  'imageBuild',
  'localServer',
  'watch'
]));

// Prodaction mode
gulp.task('build', gulpsync.sync([
  'cleanBuild',
  'pugBuild',
  'jsBuild',
  'pngSpriteCreate',
  'styleBuild',
  'fontsBuild',
  'svgSpriteBuild',
  'imageBuild',
  'styleMove',
  'jsMove',
  'zipFileBuild',
  'localServerBuild',
  'watch'
]));