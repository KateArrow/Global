const gulp  = require('gulp'),        // https://gulpjs.com/
      clean = require('gulp-clean');  // https://www.npmjs.com/package/gulp-clean
  
const path = require('../config.gulp').path;

const name = path.svgSpriteBuild.distFile;  

module.exports = () => {
return gulp.src(name, {read: false})
    .pipe(clean());
};