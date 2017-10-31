'use strict';

const blogDataService = require('../dataservices/blogDataService');
const safetyInfo = require('./common/safetyInfo');

function configureRoute(router) {
  const routePreprocessingMiddleware = [
    safetyInfo
  ];

  router.get('/blog', routePreprocessingMiddleware, (request, response, next) => {
    blogDataService.getSummaryInfo()
      .then((summaryInfo) => {
        response.render('index', {
          contentView: 'blog/index',
          blogSummaries: summaryInfo
        });
      });
  });
}

module.exports = configureRoute;
