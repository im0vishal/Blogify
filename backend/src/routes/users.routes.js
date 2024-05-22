import { Router } from "express";
import { registerUser } from "../controllers/users.controllers.js";
const router = Router();

router.post('/signup', registerUser);

export default router;