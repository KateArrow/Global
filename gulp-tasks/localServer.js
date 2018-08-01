const gulp        = require('gulp'),         // https://gulpjs.com/
      browserSync = require('browser-sync'); // https://browsersync.io/docs/gulp

const serverConfig = require('../config.gulp').serverConfig;

module.exports = () => {
  browserSync(serverConfig);
};