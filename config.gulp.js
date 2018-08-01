const package = require('./package.json');

const SRC_DIR  = './src/',
      DIST_DIR = './public/',
      BUILD_FOLDER = './build/';

const { name } = package;

let path = {
  zip: {
    src: `${DIST_DIR}**/*.*`,
    name: `${name}.build.zip`,
    dist: `${BUILD_FOLDER}source/`,
    srcSource: `./${SRC_DIR}**/*.*`,
    distSource: './',
    nameSource: `${name}.source.zip`
  },

  jsBuild: {
    src : `${SRC_DIR}assets/js/main.js`,
    dist: `${DIST_DIR}js/`,
    distFileName: 'main.js',
    build: `${BUILD_FOLDER}js/`
  },

  jsMove: {
    src : `${SRC_DIR}assets/js/**/*.*`,
    dist: `${BUILD_FOLDER}source/js`,
  },

  styleBuild: {
    src : `${SRC_DIR}assets/styles/style.scss`,
    dist: `${DIST_DIR}css/`,
    build: `${BUILD_FOLDER}css/`,
    name: 'style.css',
    uncss: [`${DIST_DIR}index.html`]
  },

  styleMove: {
    src: `${SRC_DIR}assets/styles/**/*.*`,
    dist: `${BUILD_FOLDER}source/sass`
  },

  imageBuild: {
    src : `${SRC_DIR}assets/img/**/*.+(jpg|png|gif|svg|webp|jpeg)`,
    dist: `${DIST_DIR}img/`,
    build: `${BUILD_FOLDER}img/`
  },

  webpBuild: {
    src : `${SRC_DIR}assets/img**/*.+(jpg|png|)`,
    dist: `${SRC_DIR}assets/`
  },

  pugBuild: {
    src : `${SRC_DIR}pages/*.pug`,
    dist: `${DIST_DIR}`,
    build: `${BUILD_FOLDER}`
  },

  fontsBuild: {
    src : `${SRC_DIR}assets/fonts/**/*.*`,
    dist: `${DIST_DIR}fonts`,
    build: `${BUILD_FOLDER}fonts`
  },

  watch: {
    pug   : `${SRC_DIR}**/*.pug`,
    js    : `${SRC_DIR}**/*.js`,
    style : `${SRC_DIR}**/*.scss`,
    img   : `${SRC_DIR}assets/img/**/*.+(jpg|png|gif|svg|webp)`,
    fonts : `${SRC_DIR}assets/fonts/**/*.*`
  },

  svgSpriteBuild: {
    svgSrcMonocolor    : `${SRC_DIR}assets/sprite/svg/monocolor/*.svg`,
    svgNameMonocolor   : `${SRC_DIR}assets/sprite/svg/monocolor.svg`,
    svgSrcMulticolor   : `${SRC_DIR}assets/sprite/svg/multicolor/*.svg`,
    svgNameMulticolor  : `${SRC_DIR}assets/sprite/svg/multicolor.svg`,

    newFileName  : `svgSprite.svg`,
    dist         : `${DIST_DIR}img/`,
    build        : `${BUILD_FOLDER}img/`,
    distFile     : `${DIST_DIR}img/svgSprite.svg`
  },

  pngSpriteBuild: {
    src          : `${SRC_DIR}assets/sprite/png/*.png`,
    name         : `sprite.png`,
    dist         : `${DIST_DIR}img`,
    build        : `${BUILD_FOLDER}img`,
    cssPath      : `${SRC_DIR}assets/styles/global/`,
    processor    : 'scss',
    cssName      : 'global.sprite.scss',
    imgLocation: `../../../img/sprite.png`,
  },

  clean: DIST_DIR,
  cleanBuild: BUILD_FOLDER
};

const serverConfig = {
  server: {
    baseDir: DIST_DIR
  },
  tunnel   : true,
  host     : 'localhost',
  port     : 3000,
  logPrefix: "Frontend_Project"
};

const serverConfigBuild = {
  server: {
    baseDir: BUILD_FOLDER
  },
  tunnel   : true,
  host     : 'localhost',
  port     : 8080,
  logPrefix: "Frontend_Project"
};

module.exports = { path, serverConfig, BUILD_FOLDER, serverConfigBuild };