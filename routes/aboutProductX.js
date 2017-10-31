'use strict';

const safetyInfo = require('./common/safetyInfo');

function configureRoute(router) {
  const routePreprocessingMiddleware = [
    safetyInfo
  ];

  router.get('/about_productx', routePreprocessingMiddleware, (request, response, next) => {
    response.render('index', {
      contentView: 'about_productx/index',
      headline: 'About ProductX',
      aboutProductInfo: [
        {
          imageSrc: 'images/nerd.jpg',
          quote: 'Here is some useful information about ProductX: it is the best product ever!'
        },
        {
          imageSrc: 'images/hipster.png',
          quote: 'All I know about this product is that you should buy it.'
        }
      ]
    });
  });
}

module.exports = configureRoute;
