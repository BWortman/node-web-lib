'use strict';

const favicon = require('serve-favicon');
const path = require('path');

function configure(app) {
  app.use(favicon(path.join(__dirname, '../', 'public', 'favicon.ico')));
};

module.exports = configure;
