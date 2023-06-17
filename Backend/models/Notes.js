const mongoose = require('mongoose');

const NoteSchema = new Schema({
    title:{
        type: String,
        required : true
    },

    description:{
        type: String,
        required : tru,
        },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: date,
        default : date.now
    },
  });

  module.exports = mongoose.model('Notes', NoteSchema)