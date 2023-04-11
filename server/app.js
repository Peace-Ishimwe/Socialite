 // ----------- Express package ----------- 
 import express from 'express';
 const app = express();

 // ------------ Middlewares --------------
import cookieParser from 'cookie-parser'
import cors from 'cors' 
import morgan from "morgan"
app.use(morgan('tiny'))
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser())
app.use(express.json());

// // ------------- routes -------------- 
import  authRoutes  from "./routes/authRoutes.js"
app.use("/", authRoutes);

// ------------ the dotenv file ------------- 
import dotenv from 'dotenv'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({
  path: path.resolve(__dirname, './utils/config.env')
});

// --------------- Listening to port -------------- 
const port = process.env.PORT || 8080
app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
}); 
 
// database connection 
import connectDB from "./utils/database.js";
connectDB()


app.use(express.json());