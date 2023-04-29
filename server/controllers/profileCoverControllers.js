import Posts from "../model/postModel.js";
import jwt from "jsonwebtoken";

export const profileImage = async (req, res) => {
  try {
    const token = await req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    const post = await Posts.findOne({ userId , profile: true });
    if(post){
        res.status(200).json({ urlProfileImage: post.post });
    }else{
        res.status(200).json({ urlProfileImage: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const coverImage = async (req, res) => {
    try {
      const token = await req.cookies.jwt;
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decoded.id;
  
      const post = await Posts.findOne({ userId , cover: true });
      
      if(post){
        res.status(200).json({ urlCoverImage: post.post });
      }else{
        res.status(200).json({ urlCoverImage:"https://img.freepik.com/free-vector/blank-meadow-landscape-scene_1308-59927.jpg?w=2000" });
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };