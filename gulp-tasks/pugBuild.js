const gulp        = require('gulp'),         // https://gulpjs.com/
      pug         = require('gulp-pug'),     // https://www.npmjs.com/package/gulp-pug
      plumber     = require('gulp-plumber'), // https://www.npmjs.com/package/gulp-plumber
      browserSync = require('browser-sync'), // https://browsersync.io/docs/gulp
      environments = require('gulp-environments'); // https://www.npmjs.com/package/gulp-environments

const path = require('../config.gulp').path,
      development = environments.development,
      production = environments.production;

const src    = path.pugBuild.src,
      dist   = path.pugBuild.dist,
      reload = browserSync.reload,
      build  = path.pugBuild.build;

module.exports = () => {
  return gulp.src(src)
  .pipe(pug({
    pretty: true
  }))
  .pipe(plumber())

  .pipe( production(gulp.dest(build)) )
  .pipe( development(gulp.dest(dist)) )
  
  .pipe(reload({stream: true}));    
};