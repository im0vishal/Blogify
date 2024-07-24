
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    content:{
        type: String,
        required: true,
        trim: true,
    },
    author:{
        type: String,
        required: true,
        trim: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    
});

const Blog = mongoose.model("Blog", blogSchema);

export { Blog };