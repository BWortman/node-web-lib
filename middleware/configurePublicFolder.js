'use strict';

const express = require('express');
const path = require('path');

function configure(app) {
  app.use(express.static(path.join(__dirname, '../', 'public')));
};

module.exports = configure;
