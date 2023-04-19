import  User from "../model/authModel.js"
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
          if (user) {
            const { email , firstName, lastName } = user
            res.json({ status: true, email , firstName, lastName})
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