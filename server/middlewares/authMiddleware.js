import  User from "../model/authModel.js"
import AboutUser from "../model/aboutModel.js";
import  jwt  from "jsonwebtoken"

export const checkUser = async (req, res, next) => {
  const token = await req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      process.env.SECRET_KEY,
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          const aboutInfo = await AboutUser.findOne({userId: decodedToken.id})
          if (user) {
            const { email , firstName, lastName } = user
            const { about }  = aboutInfo
            res.json({ status: true, email , firstName, lastName , about })
          }
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};