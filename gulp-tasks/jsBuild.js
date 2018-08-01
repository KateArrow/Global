const gulp         = require('gulp'),                // https://gulpjs.com/
      gulpRigger   = require('gulp-rigger'),         // https://www.npmjs.com/package/gulp-rigger
      concat       = require('gulp-concat'),         // https://www.npmjs.com/package/gulp-concat
      browserSync  = require('browser-sync'),        // https://browsersync.io/docs/gulp
      sourcemaps   = require('gulp-sourcemaps'),     // https://www.npmjs.com/package/gulp-sourcemaps
      minify       = require('gulp-minify'),
      environments = require('gulp-environments');  // https://www.npmjs.com/package/gulp-environments

const path = require('../config.gulp').path,
      development = environments.development,
      production = environments.production;

const src    = path.jsBuild.src,
      dist   = path.jsBuild.dist,
      name   = path.jsBuild.distFileName,
      build  = path.jsBuild.build,
      reload = browserSync.reload;

module.exports = () => {
  gulp.src(src)
    .pipe( development(sourcemaps.init() ))
    .pipe(gulpRigger())
    .pipe(concat(name))

    .pipe( development(sourcemaps.write() ))

    .pipe( production( minify({
      ext:{
        min:'.js'
      }
    })) )
    
    .pipe( production(gulp.dest(build) ))
    .pipe( development(gulp.dest(dist) ))
    
    .pipe(reload({stream: true}));      
};