import {Router} from "express";
import {registro, login, getCompras} from "../controllers/auth.controller.js";
import {verifyToken} from "../middlewares/usuario.helper.js"

const router = Router();

router.post("/registro", registro);

router.post('/login', login);

router.get("/:user/compras",verifyToken, getCompras);

export default router;