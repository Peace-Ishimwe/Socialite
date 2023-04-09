import mongoose from "mongoose";
mongoose.set(`strictQuery` , true)

const connectDB = async () =>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI ,  { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Mongodb connected ${con.connection.host}`);    
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to MongoDB');
          });
          
          mongoose.connection.on('error', (err) => {
            console.log('Mongoose connection error:', err);
          });
          
          mongoose.connection.on('disconnected', () => {
            console.log('Mongoose disconnected from MongoDB');
          });
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB