'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap

require('./home')(router);
require('./aboutProductX')(router);
require('./faq')(router);
require('./blog')(router);
require('./blogArticle')(router);

// Footer Nav
require('./aboutAcme')(router);
require('./ourBrands')(router);

module.exports = router;
