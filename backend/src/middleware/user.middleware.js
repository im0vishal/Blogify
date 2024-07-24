import asyncHandler from "../utils/asynchandler.js";
import jwt from 'jsonwebtoken';

export const Authmiddleware = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log("token", token);
    if(!token){
        res.status(401);
        throw new Error('Not authorized, no token');
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if(!payload){
        res.status(401);
        throw new Error('Not authorized, token failed');
    }
    req.user = payload;
    next();
});