const gulp  = require('gulp'),       // https://gulpjs.com/
      clean = require('gulp-clean'); // https://www.npmjs.com/package/gulp-clean

const path = require('../config.gulp').path;

const dist = path.cleanBuild;

module.exports = () => {
  return gulp.src(dist, {read: false})
    .pipe(clean());
};