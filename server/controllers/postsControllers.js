import cloudinary from "../utils/cloudinary.js";
import Posts from "../model/postModel.js";
import jwt from "jsonwebtoken";
import User from "../model/authModel.js";

export const getPost = async (req, res) => {
  try {
    const token = await req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const posts = await Posts.find({ userId });
    const userPosts = [];

    if (posts.length > 0) {
      const profilePost = await Posts.findOne({userId , profile: true})
      let profileImageUrl;
      if (profilePost) {
        profileImageUrl = profilePost.post;
      } else {
        profileImageUrl =
        "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg";
      }
      for (const post of posts) {
        const userInfo = await User.findById(post.userId);
        const userId = post.userId;
        userPosts.push({
          post: post.post,
          data: post.data,
          date: post.date,
          profileImageUrl: profileImageUrl,
          id: post._id,
          likes: post.likes,
          comments: post.comments.reverse(),
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
        });
      }
      res.json(userPosts);
    } else {
      res.json({ message: "You don't have any posts" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const uploadPost = async (req, res) => {
  try {
    const { previewSource, dataPost, cover, profile } = await req.body;
    const { id: userId } = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY);
    const { secure_url: postUrl } = await cloudinary.uploader.upload(
      previewSource,
      {
        use_filename: true,
        folder: "socialite_posts",
      }
    );

    if (cover === true) {
      const coverUpdated = await Posts.findOneAndUpdate(
        { cover: true , userId: userId },
        { $set: { cover: false } },
        { new: true }
      );
    } else if (profile === true) {
      const profileUpdated = await Posts.findOneAndUpdate(
        { profile: true  , userId: userId},
        { $set: { profile: false } },
        { new: true }
      );
    }

    const newPost = await Posts.create({
      post: postUrl,
      data: dataPost,
      userId,
      profile: profile,
      cover: cover,
    });
    res.json({ message: "Uploaded successfully", newPost });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong. Please try again later." });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const userPosts = [];
    const allPosts = await Posts.find()
      .sort({ timeStamp: -1 })
      .populate("userId", "firstName lastName");

    for (const post of allPosts) {
      const userInfo = await User.findById(post.userId);
      const userId = userInfo._id;
      const profilePost = await Posts.findOne({userId , profile: true})
      let profileImageUrl;
      if (profilePost) {
        profileImageUrl = profilePost.post;
      } else {
        profileImageUrl =
        "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg";
      }
      userPosts.push({
        post: post.post,
        data: post.data,
        date: post.date,
        profileImageUrl : profileImageUrl,
        id: post._id,
        likes: post.likes,
        userId: post.userId,
        comments: post.comments.reverse(),
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      });
    }
    res.json(userPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Network Error" });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.body;
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const post = await Posts.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.likes.includes(userId)) {
      return res.status(400).json({ message: "Post already liked" });
    }

    post.likes.push(userId);
    await post.save();

    res.status(200).json({ message: "Post liked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const unLikePost = async (req, res) => {
  try {
    const { id } = req.body;
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const post = await Posts.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (!post.likes.includes(userId)) {
      return res.status(400).json({ message: "Post not liked" });
    }

    post.likes = post.likes.filter((like) => like !== userId);
    await post.save();

    res.status(200).json({ message: "Post unliked" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const checkIfLiked = async (req, res) => {
  try {
    const token = await req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const posts = await Posts.find();
    const likedPostIds = posts.reduce((acc, post) => {
      if (post.likes.includes(userId)) {
        acc.push(post._id);
      }
      return acc;
    }, []);

    if (likedPostIds.length > 0) {
      res.json(likedPostIds);
    } else {
      res.json({ liked: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ServerError" });
  }
};

export const commentPost = async (req, res) => {
  try {
    const { id, comments } = req.body;
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const userInfo = await User.findById(userId);
    const { firstName, lastName } = userInfo;

    const post = await Posts.findById(id);

    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "short" });
    const year = now.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

    post.comments.push({
      firstName,
      lastName,
      commenterId: userId,
      comments,
      formattedDate,
    });
    await post.save();

    res.status(200).json({ message: "Comment posted succesfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ServerError" });
  }
};
