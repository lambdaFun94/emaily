const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0,
  },
});

// Create mongo collection with name users
// Documents will follow userSchema
mongoose.model("users", userSchema);
