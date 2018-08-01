const gulp       = require('gulp'),             // https://gulpjs.com/
      svgmin     = require('gulp-svgmin'),      // https://www.npmjs.com/package/gulp-svgmin
      svgSymbols = require('gulp-svg-symbols'), // https://www.npmjs.com/package/gulp-svg-symbols
      rename     = require("gulp-rename");      // https://www.npmjs.com/package/gulp-rename

const path = require('../config.gulp').path;

const src  = path.svgSpriteBuild.svgSrcMulticolor,
      name = path.svgSpriteBuild.svgNameMulticolor;    

module.exports = () => {
  return gulp.src(src)
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(svgSymbols({
      templates: ['default-svg']
    }))
    .pipe(rename(name))
    .pipe(gulp.dest('./'));
};