import mongoose from 'mongoose';

const userSchema = new Schema({
  name : {
    type : String,
    required : true ,
    },
    email : {
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
module.exports = mongoose.module('notes',userSchema);