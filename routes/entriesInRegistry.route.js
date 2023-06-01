const Router = require('express');
const { entryInRegistryController } = require('../controllers/entriesInRegistry.controller');

const route = Router();

route.get('/entries', entryInRegistryController.getActiveEntries);
route.post('/entry', entryInRegistryController.postEntry);
route.patch('/complete/entry/:id', entryInRegistryController.completionEntry);

module.exports = route;