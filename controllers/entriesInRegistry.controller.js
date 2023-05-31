const Entry = require('../models/EntryInRegistry.model');
const dayjs = require('dayjs');
const ruLocale = require('dayjs/locale/ru');

module.exports.entryInRegistryController = {
   getEntries: async (req, res) => {
      try {
         const date = dayjs(new Date()).locale(ruLocale).format('DD.MM.YYYY');
         const data = await Entry.find({date, isСomplete: false});
         res.json(data);
      } catch (err) {
         res.json(err + '. Не получилось получить номер записи в регистратуру');
      }
   },
   postEntry: async (req, res) => {
      try {
         const { isСomplete } = req.body;
         const date = dayjs(new Date()).locale(ruLocale).format('DD.MM.YYYY');
         const time = dayjs(new Date()).locale(ruLocale).format('HH:mm');

         const lastObject = await Entry.findOne({date}).sort({ number: -1 });
         const number = lastObject.length === 0 ? 1 : lastObject.number + 1;
         const data = await Entry.create({ number, isСomplete, date, time });
         res.json(data);
      } catch (err) {
         res.json(err + '. Не получилось записать в очередь в регистратуру');
      }
   },
   completionEntry: async (req, res) => {
      try {
         // const { windowNumber } = req.body;
         const date = dayjs(new Date()).locale(ruLocale).format('DD.MM.YYYY');
         await Entry.findByIdAndUpdate(req.params.id, {isСomplete: true});

         const nextEntry = await Entry.findOne({date, isСomplete: false});
         console.log(nextEntry);
         nextEntry !== null ? res.json('Вызван следующий пациент с номером Р' + nextEntry.number) : res.json('Нет пациентов в очереди')
      } catch (err) {
         res.json(err + '. Неудалось вызвать следующего пациента')
      }
   }
};
