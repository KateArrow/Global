const gulp  = require('gulp'),       // https://gulpjs.com/
      clean = require('gulp-clean'); // https://www.npmjs.com/package/gulp-clean

const path = require('../config.gulp').path;

const nameMonocolor = path.svgSpriteBuild.svgNameMonocolor,  
      nameMulticolor = path.svgSpriteBuild.svgNameMulticolor;    

module.exports = () => {
    return gulp.src([nameMonocolor, nameMulticolor], {read: false})
        .pipe(clean());
};