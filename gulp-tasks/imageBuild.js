const gulp         = require('gulp'),               // https://gulpjs.com/
      image        = require('gulp-image'),         // https://github.com/1000ch/gulp-image
      browserSync  = require('browser-sync'),       // https://browsersync.io/docs/gulp
      environments = require('gulp-environments'); // https://www.npmjs.com/package/gulp-environments

const path = require('../config.gulp').path,
      development = environments.development,
      production = environments.production;

const src    = path.imageBuild.src,
      dist   = path.imageBuild.dist,
      build  = path.imageBuild.build,
      reload = browserSync.reload;

module.exports = () => {
  return gulp.src(src)
    .pipe(production(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    })))
    .pipe( production(gulp.dest(build)) )    
    .pipe( development(gulp.dest(dist)) )
    .pipe(reload({stream: true}));          
};