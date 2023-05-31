const { Schema, SchemaTypes, model }  = require("mongoose");

const EntryInRegistrySchema = Schema(
   {
      windowNumber: Number,
      number: {
         type: Number,
         required: true,
      },
      isСomplete: {
         type: Boolean,
         required: true,
      },
      date: {
         type: String,
         required: true,
      },
      time: {
         type: String,
         required: true,
      },
   }
);

const EntryInRegistry = model('EntryInRegistry', EntryInRegistrySchema);

module.exports = EntryInRegistry;