'use strict';

function configure(app) {
  require('./configureBodyParser')(app);
  require('./configureFavicon')(app);
  require('./configureLogger')(app);
  require('./configurePublicFolder')(app);

  require('./addAppNameToResponse')(app);

  require('./configureRoutes')(app);

  // Make sure configureErrorHandler is LAST!!!
  require('./configureErrorHandler')(app);
};

module.exports.configure = configure;
