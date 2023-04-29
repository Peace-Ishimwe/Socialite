import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../model/authModel.js";
import Post from "../model/postModel.js";

export const findUsers = async (req, res) => {
  try {
    const token = await req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
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
            profileImage: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg",
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