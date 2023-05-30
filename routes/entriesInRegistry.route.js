const Router = require('express');
const { entryInRegistryController } = require('../controllers/entriesInRegistry.controller');

const route = Router();

route.get('/entries', entryInRegistryController.getEntries);
route.post('/entry', entryInRegistryController.postEntry);

module.exports = route;