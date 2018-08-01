const gulp = require('gulp'),                      // https://gulpjs.com/
      browserSync = require('browser-sync'),       // https://browsersync.io/docs/gulp
      environments = require('gulp-environments'); // https://www.npmjs.com/package/gulp-environments

const path = require('../config.gulp').path,
      development = environments.development,
      production = environments.production;

const src  = path.fontsBuild.src,
      dist = path.fontsBuild.dist,
      build = path.fontsBuild.build,    
      reload = browserSync.reload;

module.exports = () => {
  return gulp.src(src)
    .pipe(development(gulp.dest(dist)))
    .pipe(production(gulp.dest(build)))

    .pipe(reload({stream: true}));              
};