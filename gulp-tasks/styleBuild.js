const gulp         = require('gulp'),                               // https://gulpjs.com/
      sass         = require('gulp-sass'),                          // https://www.npmjs.com/package/gulp-sass
      importCss    = require('gulp-import-css'),                    // https://www.npmjs.com/package/gulp-import-css
      gcmq         = require('gulp-group-css-media-queries'),       // https://www.npmjs.com/package/gulp-group-css-media-queries
      cleanCSS     = require('gulp-clean-css'),                     // https://github.com/scniro/gulp-clean-css
      browserSync  = require('browser-sync'),                       // https://browsersync.io/docs/gulp
      autoprefixer = require('gulp-autoprefixer'),                  // https://www.npmjs.com/package/gulp-autoprefixer
      concat       = require('gulp-concat'),                        // https://www.npmjs.com/package/gulp-concat
      uncss        = require('gulp-uncss'),
      sourcemaps   = require('gulp-sourcemaps'),                    // https://www.npmjs.com/package/gulp-sourcemaps
      environments = require('gulp-environments');                  // https://www.npmjs.com/package/gulp-environments

const path = require('../config.gulp').path,
      development = environments.development,
      production = environments.production;

const src        = path.styleBuild.src,
      dist       = path.styleBuild.dist,
      name       = path.styleBuild.name,
      reload     = browserSync.reload,
      build      = path.styleBuild.build,
      uncssFiles = path.styleBuild.uncss;

module.exports = () => {
  return gulp.src(src)
    // .pipe( development(sourcemaps.init()) )
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(importCss())
    .pipe(concat(name))  

    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe( production(gcmq()) )      
    .pipe( production(cleanCSS({compatibility: 'ie8', debug: true}), function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }) )
    
    // .pipe( development(sourcemaps.write()) )    
    
    .pipe( development(gulp.dest(dist)) )
    .pipe( production(gulp.dest(build)) )
    
    .pipe(reload({stream: true}));
};