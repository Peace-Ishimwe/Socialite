import { text } from "express";
import nodemailer from "nodemailer";

export const contactUs = (req , res) => {
    const {name , email  , subject , telephone , message } = req.body
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "peaceishimwem@gmail.com",
            pass: "munyaneza1@23"
        }
    })

    const mailOptions = {
        from: email,
        to: "peaceishimwem@gmail.com",
        subject: `Message from ${email} : ${subject}`,
        text: `Names: ${name} , Tel: ${telephone} , Message: ${message} ` 
    }

    transporter.sendMail(mailOptions , (error, info) => {
        if(error) {
            console.log(error);
        }else{
            console.log("Email sent" + info.response)
            res.json("Message sent")
        }
    })
}   

