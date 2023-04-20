import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    about: {
      type: String,
      required: true,
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