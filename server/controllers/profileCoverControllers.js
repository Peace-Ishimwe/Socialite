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
        res.status(200).json({ urlProfileImage: "https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration.jpg" });
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
        res.status(200).json({ urlCoverImage:"https://media.istockphoto.com/id/1315768127/photo/abstract-black-background-empty-black-gradient-room-studio-background-abstract-backgrounds.jpg?b=1&s=170667a&w=0&k=20&c=rrYOb0pJGGjAIu22xkfIfgRZC11jRi39s_AmBMgAah4=" });
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  };