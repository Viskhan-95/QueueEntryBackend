const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema(
   {
      numberEntryInRegistry: String,
      numberEntryInOffice: String,
      countEntryInRegistry: Number,
      countEntryInOffice: Number,
      windowNumber: String,
      isActive: Boolean,
   },
   {
      timestamps: true,
   },
);

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;