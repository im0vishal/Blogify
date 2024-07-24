
// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         console.log(process.env.MONGO_URI)
//         const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/Blogify`);
//         console.log(`\n MONGO_DB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log(process.env.MONGO_URI)
//         console.error('ERROR: ', error);
//         process.exit(1);
//     }
// }

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/Blogify`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
};

export default connectDB;
