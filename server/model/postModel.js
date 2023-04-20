import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    post: {
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

const Posts = mongoose.model('Posts', postSchema , "posts")
export default Posts;