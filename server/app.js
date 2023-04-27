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
    methods: ["GET", "POST" , "PUT" , "DELETE" , "PATCH"],
    credentials: true,
  })
);
app.use(cookieParser())
app.use(express.json({limit:"3mb"}));
app.use(express.urlencoded({ limit: '3mb', extended: true }));

// ------------- routes -------------- 
import  authRoutes  from "./routes/authRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import aboutRoutes from "./routes/aboutRoutes.js"
import visitUserRoutes from "./routes/visitUserRoutes.js"
import findUsersRoutes from "./routes/findUsersRoutes.js"
import followUserRoutes from './routes/followRoutes.js';
import updateUserRoutes from "./routes/updateUserRoutes.js"
import profileCoverRoutes from "./routes/profileCoverRoutes.js"
import popularProfilesRoutes from "./routes/popularProfilesRoutes.js"
app.use("/", authRoutes);
app.use("/", postRoutes);
app.use("/", aboutRoutes);
app.use("/" , visitUserRoutes)
app.use("/" , findUsersRoutes)
app.use("/" , followUserRoutes)
app.use("/" , updateUserRoutes)
app.use("/" , profileCoverRoutes)
app.use("/" , popularProfilesRoutes)

// ------------ the dotenv file ------------- 
import dotenv from 'dotenv'
dotenv.config()

// --------------- Listening to port -------------- 
const port = process.env.PORT || 8080
app.use("/" , followUserRoutes)
app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
}); 
 
// database connection 
import connectDB from "./utils/database.js";
connectDB()

app.use(express.json());