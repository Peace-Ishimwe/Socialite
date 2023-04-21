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
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser())
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ------------- routes -------------- 
import  authRoutes  from "./routes/authRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import aboutRoutes from "./routes/aboutRoutes.js"
app.use("/", authRoutes);
app.use("/", postRoutes);
app.use("/", aboutRoutes);

// ------------ the dotenv file ------------- 
import dotenv from 'dotenv'
dotenv.config()

// --------------- Listening to port -------------- 
const port = process.env.PORT || 8080
app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
}); 
 
// database connection 
import connectDB from "./utils/database.js";
connectDB()

app.use(express.json());