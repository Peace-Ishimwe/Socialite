// config cloudinary
import cloudinary from "../utils/cloudinary.js";
import Posts from "../model/postModel.js";
import jwt from "jsonwebtoken";
import User from "../model/authModel.js";

export const getPost = async (req, res) => {
  try {
    const token = await req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;
    const posts = await Posts.find({ userId: userId });
    const user = await User.findOne({ _id: userId });
    if (posts) {
      const postUser = [];
      const { firstName, lastName } = user;
      posts.map((post) => {
        postUser.push([post.post, post.date, post.data]);
      });
      res.json({ postUser, firstName, lastName });
    } else {
      res.json({ messages: "You don't have any posts" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const uploadPost = async (req, res) => {
  try {
    const previewSource = req.body.previewSource;
    const dataPost = req.body.dataPost;
    const uploadResponse = await cloudinary.uploader.upload(previewSource, {
      use_filename: true,
      folder: "socialite_posts",
    });
    const token = await req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = await decoded.id;
    const post = Posts.create({
      post: uploadResponse.url,
      data: dataPost,
      userId: userId,
    });
    res.json({ message: "Uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong try again" });
  }
};
