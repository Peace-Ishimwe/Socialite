import jwt from "jsonwebtoken";
import User from "../model/authModel.js";

export const followUserSuggested = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const { id } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.followers.includes(userId)) {
      return res.status(400).json({ error: "User already following" });
    }
    user.followers.push(userId);
    await user.save();
    res.json(user);
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
  
      const { id } = req.params;
  
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