const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  issuer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    houseNumber: { type: String },
    streetName: { type: String },
    locality: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    country: { type: String },
  },
  mobile: {
    type: Number,
    required: true,
  },
  books: [
    {
      issue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("client", ClientSchema);
