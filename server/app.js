// ----------- Express package ----------- 
import express from 'express';
const app = express();

// ------------ Middlewares --------------
import cookieParser from 'cookie-parser'
app.use(cookieParser())
app.use(express.json());

// // ------------- routes -------------- 
import router from './routes/routes.js'
app.use(router)


// ------- Authorization ----------------
import { checkUser , requireAuth } from './middlewares/authMiddleware.js';

// ------------ the dotenv file ------------- 
import dotenv from 'dotenv'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({
  path: path.resolve(__dirname, './utils/config.env')
});

// --------------- The database ------------------ 
import connectDB from './database/connection.js';
connectDB()

// --------------- Listening to port -------------- 
const port = process.env.PORT || 8080
app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});