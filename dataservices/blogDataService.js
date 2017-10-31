'use strict';

const blogArticles = [
  {
    id: '1',
    headline: 'Our First Blog',
    imageSrc: '../images/book_coffee_glasses.jpg',
    body: [
      'This is a blog about our great product.',
      'What a useful blog this is!',
      'I can\'t wait to use the product some more.'
    ]
  },
  {
    id: '2',
    headline: 'Our Second Blog',
    imageSrc: '../images/coffee_nerds.jpg',
    body: [
      'This is another blog about our great product.',
      'What are we going to learn about today?',
      'I hope today\'s blog is as helpful to you as yesterday\'s was.'
    ]
  }
];

function getSummaryInfo() {
  return new Promise((resolve) => {
    resolve(blogArticles);
  });
}

function getArticle(id) {
  return new Promise((resolve, reject) => {
    let article = blogArticles.find((article) => article.id === id);
    if (article) {
      resolve(article);
    } else {
      reject(new Error('Blog article not found!'));
    }
  });
}

const exportObj = {
  getSummaryInfo,
  getArticle
};

module.exports = exportObj;