'use strict';

const blogDataService = require('../dataservices/blogDataService');

function configureRoute(router) {
  router.get('/blog/:id', (request, response, next) => {
    blogDataService.getArticle(request.params.id)
      .then((article) => {
        response.render('index', {
          contentView: 'blog/blogArticle',
          article: article
        });
      })
      .catch(next);
  });
}

module.exports = configureRoute;
