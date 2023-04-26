import User from "../model/authModel.js";
import jwt from "jsonwebtoken";
import AboutUser from "../model/aboutModel.js";


const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};


import bcrypt from "bcrypt";

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "Invalid credentials") {
    errors.email = "Incorrect email or password";
  }

  if (err.message === "Invalid credentials") {
    errors.password = "incorrect email or password";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

export const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, gender, telephone } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // hash password with salt rounds of 10
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      telephone,
    });
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: maxAge,
    });

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    const aboutUser = await AboutUser.create({
      about: "Tell us more about you 😃",
      userId: user._id,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    let errors = handleErrors(err);
    if (err.code === 11000) {
      // MongoDB duplicate key error code
      errors = { email: "This email is already registered" };
    }
    res.json({ errors, created: false });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
          expiresIn: maxAge,
        });
        res.cookie("jwt", token, { httpOnly: false , maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id, authenticated: true });
      } else {
        res.status(400).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};