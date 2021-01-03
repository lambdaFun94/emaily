const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// Create mongo collection with name users
// Documents will follow userSchema
mongoose.model("users", userSchema);
