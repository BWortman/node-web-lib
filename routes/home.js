'use strict';

const safetyInfo = require('./common/safetyInfo');

function configureRoute(router) {
  const routePreprocessingMiddleware = [
    safetyInfo
  ];

  router.get('/', routePreprocessingMiddleware, (request, response, next) => {
    response.render('index', {
      contentView: 'home/index',
      overviewHeader: 'Product Overview',
      overviewDetail: 'Here is the overview of the product. It\'s a really great product. You\'ll like it.'
    });
  });
}

module.exports = configureRoute;
