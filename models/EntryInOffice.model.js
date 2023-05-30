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
      isСompleted: {
         type: Boolean,
         required: true,
      }
   },
   {
      timestamps: true,
   },
);

const EntryInOffice = model('EntryInOffice', EntryInOfficeSchema);

module.exports = EntryInOffice;