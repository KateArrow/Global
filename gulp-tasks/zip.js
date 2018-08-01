const gulp = require('gulp'),     // https://gulpjs.com/
      zip  = require('gulp-zip'); // https://www.npmjs.com/package/gulp-zip
 
const path = require('../config.gulp').path;

const src = path.zip.src,
      name = path.zip.name,
      dist = path.zip.dist,
      srcSource = path.zip.srcSource,
      distSource = path.zip.distSource,
      nameSource = path.zip.nameSource;

module.exports = () => {
  gulp.src(src)
    .pipe(zip(name))
    .pipe(gulp.dest(dist));
    
  gulp.src(srcSource)
    .pipe(zip(nameSource))
    .pipe(gulp.dest(dist));    
};