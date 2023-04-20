import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    about: {
      type: String,
      required: true,
      minLength: 15,
      maxlength: 255,
    },
    userId:{
        type: String,
        required: true,
    }
  },
  {
    collection: "aboutUser",
  }
);

const AboutUser = mongoose.model('AboutUser', aboutSchema , "aboutUser")
export default AboutUser;