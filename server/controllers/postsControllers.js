// config cloudinary 
import cloudinary from '../utils/cloudinary.js';
import Posts from '../model/postModel.js';
import jwt  from 'jsonwebtoken';

export const getPost = async (req, res) =>{
    try {
        const { resources } = await cloudinary.search
        .expression('folder:socialite_posts')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
    } catch (err) {
        console.log(err);
    }
}

export const uploadPost = async (req, res) =>{
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'socialite_posts',
        });
        console.log(uploadResponse);
        const token = await req.cookies.jwt;
        const decoded = jwt.verify(token , process.env.SECRET_KEY)
        const userId = await decoded.id;
        const post = Posts.create({post: uploadResponse , userId: userId})
        res.json({ message: 'Uploaded successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
}