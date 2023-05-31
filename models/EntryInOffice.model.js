const { Schema, SchemaTypes, model }  = require("mongoose");

const EntryInOfficeSchema = Schema(
   {
      windowNumber: {
         ref: 'Window',
         type: SchemaTypes.ObjectId,
      },
      number: {
         type: Number,
         required: true,
      },
      isСomplete: {
         type: Boolean,
         required: true,
      },
      date: {
         type: Date,
         required: true,
      },
      time: {
         type: Date,
         required: true,
      },
   }
);

const EntryInOffice = model('EntryInOffice', EntryInOfficeSchema);

module.exports = EntryInOffice;