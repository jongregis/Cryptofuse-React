const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  coin_total: {
    type: Number,
    default: 0
  }
});

module.exports = User = mongoose.model("user", UserSchema);
