'use strict';

function addAppNameToResponse(app) {
  app.use((req, res, next) => {
    res.locals.appName = process.env.APP_NAME;
    next();
  });
};

module.exports = addAppNameToResponse;
