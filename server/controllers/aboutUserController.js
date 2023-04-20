import AboutUser from "../model/aboutModel.js";
import jwt  from "jsonwebtoken";

const aboutUserPost = async (req , res) => {
    try {
         const { aboutUser } = req.body

         const token = await req.cookies.jwt;
         const decoded = jwt.verify(token , process.env.SECRET_KEY)
         const userId = decoded.id;

         const about = await AboutUser.create({about: aboutUser , userId: userId})

         res.json({message: "Updated successfully"})
        
    } catch (err) {
        res.status(500).json({message: "internal error"})
        console.log(err)
    }
}

export default aboutUserPost