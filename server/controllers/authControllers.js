import User from "../model/authModel.js";
import jwt from "jsonwebtoken";
import AboutUser from "../model/aboutModel.js";
import bcrypt from "bcrypt";

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
  return token;
};

// Register user
export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, gender, telephone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({firstName,lastName,email,password: hashedPassword,gender,telephone});
    const token = createToken(user._id);
    await AboutUser.create({
      about: "Tell us more about you 😃",
      userId: user._id,
    });
    res.status(201).json({ status: true , user: user._id, created: true, token });
  } catch (err) {
    console.error(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors, created: false });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      const match = await bcrypt.compare(password, foundUser.password);
      if (match) {
        const token = createToken(foundUser._id);
        res.status(200).json({ user: foundUser._id, authenticated: true, token });
      } else {
        res.status(400).json({ error: "Incorrect email or password" });
      }
    } else {
      res.status(400).json({ error: "Incorrect email or password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Handle errors
const handleErrors = (err) => {
  let errors = { email: "", password: "" };
  if (err.message === "Invalid credentials") {
    errors.email = "Incorrect email or password";
    errors.password = "Incorrect email or password";
  }
  if (err.code === 11000) {
    errors.email = "Email is already registered";
  }
  if (err.errors) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};