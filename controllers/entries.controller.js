const Entry = require('../models/Entry.model');
const dayjs = require('dayjs');
const ruLocale = require('dayjs/locale/ru');

module.exports.entryController = {
   getEntriesInRegistry: async (req, res) => {
      try {
         const data = await Entry.find();
         const todayEntries = data.filter(
            (dateEntry) =>
               dayjs(dateEntry.createdAt).locale(ruLocale).format('DD MM YYY') ===
               dayjs(new Date()).locale(ruLocale).format('DD MM YYY'),
         );
      } catch (err) {
         res.json(err + '. Не получилось получить номер записи в регистратуру');
      }
   },
   postEntriesInRegistry: async (req, res) => {
      try {
         const {
            numberEntryInRegistry,
            numberEntryInOffice,
            countEntryInRegistry,
            countEntryInOffice,
            isActive,
         } = req.body;
         const data = await Entry.create(
            {
               numberEntryInRegistry,
               numberEntryInOffice,
               countEntryInRegistry,
               countEntryInOffice,
               isActive,
            },
            {
               new: true,
            },
         );    
      } catch (err) {
         res.json(err + '. Не получилось получить номер записи в регистратуру');
      }
   },
};
