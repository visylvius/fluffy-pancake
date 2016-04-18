'use strict'
const db = require('../db').db;
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const compression = require('compression');


function applyMiddleware(app) {
  app.use(compression());
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  var router = express.Router();
  app.use('/api', router);
  app.use(express.static(path.join(__dirname, '../../dist')));
}

module.exports = applyMiddleware;
