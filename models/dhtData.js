const mongoose = require("mongoose");

const dhtDataSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  readingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("dhtData", dhtDataSchema);
