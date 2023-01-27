const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    age: {
      type: String
    },
    location: String,
    password: {
      type: String,
      required: true
    },
    gender: String,
    occupation: String,
    marital_status: String,
    address: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
