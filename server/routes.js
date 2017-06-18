const express = require('express');
const Router = express.Router();

Router.get('/users', require('./controllers/users').fetchData);

module.exports = Router;