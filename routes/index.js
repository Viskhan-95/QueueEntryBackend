const Router = require('express');

const route = Router();

route.use(require('./entriesInRegistry.route'));

module.exports = route;