import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../model/authModel.js";
import Post from "../model/postModel.js";

export const findUsers = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = mongoose.Types.ObjectId(decoded.id);
    
    const users = await User.aggregate([
      { $match: { _id: { $ne: userId } } },
      { $sample: { size: 10 } },
      { 
        $project: { 
          _id: 1, 
          firstName: 1, 
          lastName: 1,
          followersCount: { $size: "$followers" },
        } 
      }
    ]);

    const updatedUsers = await Promise.all(
      users.map(async (user) => {
        const post = await Post.findOne({ userId: user._id, profile: true });
        if (post) {
          return {
            ...user,
            profileImage: post.post,
          };
        } else {
          return {
            ...user,
            profileImage: "/Images/profile.jpg",
          };
        }
      })
    );

    res.json(updatedUsers);
  } catch (err) {
    console.log(err);
    res.json("Server error");
  }
};
