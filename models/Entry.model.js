const { Schema, SchemaTypes, model }  = require("mongoose");

const EntrySchema = Schema(
   {
      windowNumber: {
         ref: 'Window',
         type: SchemaTypes.ObjectId,
      },
      numberEntryInRegistry: Number,
      numberEntryInOffice: Number,
      countEntryInRegistry: String,
      countEntryInOffice: String,
   },
   {
      timestamps: true,
   },
);

const Entry = model('Entry', EntrySchema);

module.exports = Entry;