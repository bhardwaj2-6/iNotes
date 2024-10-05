import mongoose from 'mongoose';

const notesSchema = new Schema({
  name : {
    title : String,
    required : true ,
    },
    description : {
        type : String,
        required : true ,
        },
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
module.exports = mongoose.module('notes',notesSchema);