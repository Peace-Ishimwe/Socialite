import Posts from "../model/postModel.js";
import jwt from "jsonwebtoken";

export const profileImage = async (req, res) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const post = await Posts.findOne({ userId , profile: true });
    if(post){
        res.status(200).json({ urlProfileImage: post.post });
    }else{
        res.status(200).json({ urlProfileImage: "/Images/profile.jpg" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const coverImage = async (req, res) => {
    try {
      const token = req.cookies.jwt;
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decoded.id;
  
      const post = await Posts.findOne({ userId , cover: true });
      
      if(post){
        res.status(200).json({ urlCoverImage: post.post });
      }else{
        res.status(200).json({ urlCoverImage:"/Images/cover.jpg" });
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };