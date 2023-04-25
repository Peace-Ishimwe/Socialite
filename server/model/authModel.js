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
      unique: [true]
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
        required: false
    },
    followers: [{ type: String }],
  },
  {
    collection: "Socialites",
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const User = mongoose.model("Users", userSchema, "Socialites");
export default User;