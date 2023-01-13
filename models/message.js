const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    from: String,
    subject: String,
    body: {
      type: String,
      required: true
    },
    location: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
