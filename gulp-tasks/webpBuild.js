const gulp = require('gulp'),      // https://gulpjs.com/
      webp = require('gulp-webp'); // https://www.npmjs.com/package/gulp-webp

const path = require('../config.gulp').path;

const src  = path.webpBuild.src,
      dist = path.webpBuild.dist; 

module.exports = () => {
  return gulp.src(src)
    .pipe(webp())
    .pipe(gulp.dest(dist));
};