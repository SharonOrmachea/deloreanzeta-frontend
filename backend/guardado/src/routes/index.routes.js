import {Router} from "express";
import {saludo} from "../controllers/index.controller.js";

const router = Router();

router.get("/index", saludo)

export default router;