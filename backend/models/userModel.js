const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],
    cart: [
      {
        type: Schema.Types.ObjectId,
        ref: 'book'
      }

    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
