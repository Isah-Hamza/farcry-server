const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    from: String,
    subject: String,
    body: {
      type: String,
      required: true
    },
    location: {
      type: String,
    //   default: "sent"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema)