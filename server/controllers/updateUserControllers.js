import User from "../model/authModel.js";
import jwt from "jsonwebtoken"

export const updateUserInfo = async (req, res) => {
  try {
    const { firstNameUpdate, lastNameUpdate, genderUpdate, telephoneUpdate } = req.body;
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.id;

    // Find the user by ID and update the fields
    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        firstName: firstNameUpdate,
        lastName: lastNameUpdate,
        gender: genderUpdate,
        telephone: telephoneUpdate,
      },
      { new: true } // Set this option to return the updated document
    );

    // Return the updated user
    res.json({ updatedUser: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}