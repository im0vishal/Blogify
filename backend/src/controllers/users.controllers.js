// import { User } from "../models/user.schema.js";
// import asyncHandler from "../utils/asynchandler.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const registerUser = asyncHandler(async (req, res) => {
//     const { name, email, username, password } = req.body;
//     console.log(req.body)

//     const user = new User({
//         name,
//         email,
//         username,
//         password: await bcrypt.hash(password, 10),
//     });

//     const createdUser = await user.save();

//     const token = jwt.sign(createdUser.username, process.env.JWT_SECRET)

//     res.status(201).json({createdUser, token});
// });

// const postBlog = asyncHandler(async (req, res) => {
//     const { title, content, author } = req.body;
//     console.log(title, content, author);
//     res.status(201).json(createdBlog);
// });


import { User } from "../models/user.schema.js";
import asyncHandler from "../utils/asynchandler.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, username, password } = req.body;
    console.log(req.body);

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = new User({
        name,
        email,
        username,
        password: await bcrypt.hash(password, 10),
    });

    const createdUser = await user.save();

    const token = jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

    res.status(201).json({ createdUser, token });
});

const postBlog = asyncHandler(async (req, res) => {
    const { title, content, author } = req.body;
    console.log(title, content, author);
    res.status(201).json(createdBlog);
});





