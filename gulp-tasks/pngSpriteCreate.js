const gulp        = require('gulp'),                // https://gulpjs.com/
      spritesmith = require('gulp.spritesmith'),    // https://www.npmjs.com/package/gulp.spritesmith
      environments = require('gulp-environments');  // https://www.npmjs.com/package/gulp-environments

const path = require('../config.gulp').path,
      development = environments.development,
      production = environments.production;

const src          = path.pngSpriteBuild.src,
      name         = path.pngSpriteBuild.name,    
      cssName      = path.pngSpriteBuild.cssName,    
      processor    = path.pngSpriteBuild.processor,    
      imgLocation  = path.pngSpriteBuild.imgLocation,    
      dist         = path.pngSpriteBuild.dist,
      cssPath      = path.pngSpriteBuild.cssPath,
      build        = path.pngSpriteBuild.build;    

module.exports = () => {
  let spriteData =  gulp.src(src).pipe(spritesmith({
    imgName  : name,
    cssName  : cssName,
    cssFormat: processor,
    imgPath  : imgLocation,
    padding  : 90
  }));
  
  spriteData.img.pipe( production(gulp.dest(build)) );  
  spriteData.img.pipe( development(gulp.dest(dist)) );
  spriteData.css.pipe(gulp.dest(cssPath))
};