const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = model("User", UserSchema);
