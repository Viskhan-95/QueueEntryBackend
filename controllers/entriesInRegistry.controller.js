const Entry = require('../models/EntryInRegistry.model');
const dayjs = require('dayjs');
const ruLocale = require('dayjs/locale/ru');

module.exports.entryInRegistryController = {
   getEntries: async (req, res) => {
      try {
         const data = await Entry.find({'createdAt': {$lte: new Date()}, isСompleted: true});
         res.json(data);
      } catch (err) {
         res.json(err + '. Не получилось получить номер записи в регистратуру');
      }
   },
   postEntry: async (req, res) => {
      try {
         const { isСompleted } = req.body;
         const lastObject = await Entry.find({'createdAt': {$lte: new Date()}}).sort({ number: -1 }).limit(1);
         const number = lastObject.length === 0 ? 1 : lastObject[0].number + 1;
         const data = await Entry.create({ number, isСompleted });
         res.json(data);
      } catch (err) {
         res.json(err + '. Не получилось записать в очередь');
      }
   },
};
