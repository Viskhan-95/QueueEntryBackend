const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema(
   {
      numberEntryInRegistry: String,
      numberEntryInOffice: String,
      windowNumber: String,
   },
   {
      timestamps: true,
   },
);

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;