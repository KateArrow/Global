const gulp = require('gulp'),        // https://gulpjs.com/
      clean = require('gulp-clean'); // https://www.npmjs.com/package/gulp-clean

const path = require('../config.gulp').path;

const name = path.zip.name,
      dist = path.zip.dist;

module.exports = () => gulp.src(`${dist}${name}`, {read: false}).pipe(clean());