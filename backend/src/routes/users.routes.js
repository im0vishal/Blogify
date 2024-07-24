import { Router } from "express";
import { registerUser,loginUser, postBlog } from "../controllers/users.controllers.js";
import { Authmiddleware } from "../middleware/user.middleware.js";
const router = Router();

router.post('/signup', registerUser);

// Login Route
router.post('/login', loginUser);
router.post('/blog',Authmiddleware, postBlog)


export default router;