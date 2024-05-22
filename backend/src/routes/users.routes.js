import { Router } from "express";
import { registerUser } from "../controllers/users.controllers.js";
const router = Router();

router.get('/signup', registerUser);

export default router;