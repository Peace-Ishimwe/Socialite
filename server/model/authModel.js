import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true],
      maxlength: 255,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: [true],
      maxlength: 255,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true],
      unique: [true],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: [true],
    },
    telephone: {
      type: String,
      required: false,
    },
    followers: [{ type: String }],
    followings: [{ type: String }]
  },
  {
    collection: "Socialites",
  }
);

const User = mongoose.model("Users", userSchema, "Socialites");
export default User;