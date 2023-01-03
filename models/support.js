const mongoose = require("mongoose");

const supportSchema = mongoose.Schema({
  support_type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String
  },
  assigned_body: {
    name: String,
    address: String
  }
});

module.exports = mongoose.model("Support", supportSchema);
