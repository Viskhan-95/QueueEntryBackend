const { Schema, SchemaTypes, model }  = require("mongoose");

const EntryInRegistrySchema = Schema(
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

const EntryInRegistry = model('EntryInRegistry', EntryInRegistrySchema);

module.exports = EntryInRegistry;