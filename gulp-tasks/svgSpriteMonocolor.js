const gulp       = require('gulp'),             // https://gulpjs.com/
      svgmin     = require('gulp-svgmin'),      // https://www.npmjs.com/package/gulp-svgmin
      cheerio    = require('gulp-cheerio'),     // https://www.npmjs.com/package/gulp-cheerio
      svgSymbols = require('gulp-svg-symbols'), // https://www.npmjs.com/package/gulp-svg-symbols
      rename     = require("gulp-rename");      // https://www.npmjs.com/package/gulp-rename

const path = require('../config.gulp').path;

const src  = path.svgSpriteBuild.svgSrcMonocolor,
      name = path.svgSpriteBuild.svgNameMonocolor;    

module.exports = () => {
  return gulp.src(src)
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: ($) => {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .pipe(svgSymbols({
      templates: ['default-svg']
    }))
    .pipe(rename(name))
    .pipe(gulp.dest('./'));
};