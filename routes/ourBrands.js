'use strict';

function configureRoute(router) {
  router.get('/our_brands', (request, response, next) => {
    response.render('index', {
      contentView: 'our_brands/index',
    });
  });
}

module.exports = configureRoute;
