'use strict';

const express = require('express');
const path = require('path');

const middleware = require('./middleware');

const app = express();

middleware.configure(app);

(function configureViews() {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
}());

module.exports = app;
