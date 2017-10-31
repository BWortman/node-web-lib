'use strict';

function configureRoute(router) {
  router.get('/faq', (request, response, next) => {
    response.render('index', {
      contentView: 'faq/index',
    });
  });
}

module.exports = configureRoute;
