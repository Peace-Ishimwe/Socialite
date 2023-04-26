import User from "../model/authModel.js";
import AboutUser from "../model/aboutModel.js";
import jwt from "jsonwebtoken";

export const checkUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (token) {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(decodedToken.id);
      const aboutInfo = await AboutUser.findOne({ userId: decodedToken.id });
      if (user && aboutInfo) {
        const {
          email,
          firstName,
          lastName,
          followers,
          followings,
          gender,
          telephone,
        } = user;
        const { about } = aboutInfo;
        res.json({
          status: true,
          email,
          firstName,
          lastName,
          about,
          followers: followers.length,
          followings: followings.length,
          gender,
          telephone
        });
      } else {
        res.json({ status: false });
      }
    } else {
      res.json({ status: false });
    }
  } catch (error) {
    next(error);
  }
};
