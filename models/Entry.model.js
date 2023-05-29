const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema(
   {
      numberEntryInRegistry: Number,
      numberEntryInOffice: Number,
      letterEntryInRegistry: String,
      letterEntryInOffice: String,
      windowNu90mber: String,
      isActive: Boolean,
   },
   {
      timestamps: true,
   },
);

const Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;