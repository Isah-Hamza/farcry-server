const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema(
  {
    //reporting type
    reporting_type: String,
    // victim's information
    name_victim: {
      type: String
    },
    phone_victim: {
      type: String
    },
    age: {
      type: String
    },
    gender: {
      type: String,
      required: true
    },
    marital_status: {
      type: String
    },
    occupation: {
      type: String
    },
    // reporters' information
    name_reporter: {
      type: String,
      required: true
    },
    phone_reporter: {
      type: String,
      required: true
    },
    email_reporter: {
      type: String,
      required: true
    },
    address_reporter: {
      type: String,
      required: true
    },
    spoken_to_someone: {
      type: Boolean
    },
    message: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Report", ReportSchema);
