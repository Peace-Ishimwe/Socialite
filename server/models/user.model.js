import mongoose from "mongoose";
import shortid from "shortid";
import bcrypt from "bcrypt";

const id = shortid.generate();

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    firstName: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: false
    }
  },
  {
    collection: "Socialites",
  }
);

userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect email or password');
  }
  throw Error('incorrect email or password');
};


const User = mongoose.model("Signup", userSchema, "Socialites");
export default User;