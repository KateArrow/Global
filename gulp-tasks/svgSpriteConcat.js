const gulp   = require('gulp'),                    // https://gulpjs.com/
      concat = require('gulp-concat'),             // https://www.npmjs.com/package/gulp-concat
      environments = require('gulp-environments'); // https://www.npmjs.com/package/gulp-environments

const path = require('../config.gulp').path,
      development = environments.development,
      production = environments.production;

const nameMonocolor = path.svgSpriteBuild.svgNameMonocolor,
      nameMulticolor = path.svgSpriteBuild.svgNameMulticolor,    
      file = path.svgSpriteBuild.newFileName,
      dist = path.svgSpriteBuild.dist,
      build = path.svgSpriteBuild.build;

module.exports = () => {
    return gulp.src([nameMulticolor, nameMonocolor])
        .pipe(concat(file))
        .pipe( production(gulp.dest(build)) )
        .pipe( development(gulp.dest(dist)) );
};