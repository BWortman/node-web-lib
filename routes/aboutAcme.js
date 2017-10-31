'use strict';

function configureRoute(router) {
  router.get('/about_acme', (request, response, next) => {
    response.render('index', {
      contentView: 'about_acme/index',
    });
  });
}

module.exports = configureRoute;
