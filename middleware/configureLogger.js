'use strict';

const logger = require('morgan');

function configure(app) {
  app.use(logger('dev'));
};

module.exports = configure;
