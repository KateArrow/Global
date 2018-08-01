const gulp = require('gulp'); // https://gulpjs.com/

const { 
  dist,
  src
} = require('../config.gulp').path.styleMove;

module.exports = () => {
  gulp.src(src)
    .pipe(gulp.dest(dist)) 
};