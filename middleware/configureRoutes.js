'use strict';

const routes = require('../routes');

function configureUnmatchedRouteHandler(request, response, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
};

function configure(app) {
  app.use(routes);
  app.use(configureUnmatchedRouteHandler);
};

module.exports = configure;
