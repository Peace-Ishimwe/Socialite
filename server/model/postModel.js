import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    post: {
      type: String,
      required: true,
    },
    data: {
      type: String,
    },
    likes: [{ type: String }],
    comments: [{ type: Object }],
    userId: {
      type: String,
      required: true,
    },
    profile: {
      type: Boolean,
    },
    cover: {
      type: Boolean,
    },
    timeStamp: {
      type: Date,
      default: Date.now,
    },
    date: {
      type: String,
      default: function () {
        const now = new Date();
        const day = now.getDate();
        const month = now.toLocaleString("default", { month: "short" });
        const year = now.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        return formattedDate;
      },
    },
  },
  {
    collection: "posts",
  }
);

const Posts = mongoose.model("Posts", postSchema, "posts");
export default Posts;
