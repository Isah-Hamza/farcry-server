const mongoose = require("mongoose");
const partnerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    partner_type: {
      type: String,
      required: true
    },
    description: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Partner", partnerSchema);
