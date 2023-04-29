import jwt from "jsonwebtoken";
import User from "../model/authModel.js";
import mongoose from "mongoose";

export const followUserSuggested = async (req, res) => {
  try {
    const token = await req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const { id } = req.body;

    const user = await User.findById(id);
    const followingUser = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.followers.includes(userId)) {
      return res.status(400).json({ error: "User already following" });
    }
    user.followers.push(userId);
    followingUser.followings.push(id)
    await followingUser.save();
    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const unFollowUserSuggested = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const currentUserId = decoded.id;

    const { id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid userId" });
    }

    const user = await User.findById(id);
    const unfollowingUser = await User.findById(currentUserId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.followers.pull(currentUserId);
    unfollowingUser.followings.pull(id)
    await unfollowingUser.save();
    await user.save();
    res.json({ message: "User unfollowed successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const checkIfollowing = async (req, res) => {
    try {
      const token = req.cookies.jwt;
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decoded.id;
  
      const { id } = req.body;
  
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const isFollowing = user.followers.includes(userId);
      res.json({ isFollowing });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  };