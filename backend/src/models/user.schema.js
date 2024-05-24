// import mongoose, { Schema } from "mongoose";


// const userschema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//         trim: true,


//     },
//     name: {
//         type: String,
//         required: true,
//         lowercase: true,
//         trim: true,

//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//         trim: true,
//     },

//     password: {
//         type: String,
//         required: true,
//         trim: true,
//     },

// });

// const User = mongoose.model("User", userschema);

// export { User }

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true , trim: true},
  email: { type: String, required: true, unique: true, trim: true},
  username: { type: String, required: true, unique: true, trim: true, lowercase: true},
  password: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

export { User };
