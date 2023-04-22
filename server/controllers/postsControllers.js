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

export const getAllPosts = async (req, res) => {
  try {
    const userPosts = [];
    const allPosts = await Posts.find();

    for (const post of allPosts) {
      const userInfo = await User.findById(post.userId);
      const userId = post.userId;
      userPosts.push({
        post: post.post,
        data: post.data,
        date: post.date,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      });
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const mixedArray = shuffleArray(userPosts);


    res.json(mixedArray);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
