import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import  authRoutes  from "./routes/authRoutes.js"
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import connectDB from "./utils/database.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({
  path: path.resolve(__dirname, './utils/config.env')
});

const port =  process.env.PORT || 8080

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Started Successfully on port ${port}`);
  }
});
 
// database connection 
connectDB()

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);
