const gulp        = require('gulp'),         // https://gulpjs.com/
      browserSync = require('browser-sync'); // https://browsersync.io/docs/gulp

const serverConfigBuild = require('../config.gulp').serverConfigBuild;

module.exports = () => {
  browserSync(serverConfigBuild);
};