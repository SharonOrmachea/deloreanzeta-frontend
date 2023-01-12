import {Router} from "express";
import {registro, login, logout, getCompras} from "../controllers/auth.controller.js";
import {verifyToken} from "../middlewares/usuario.helper.js";
import {validateRegistro, validateLogin} from "../validators/usuario.validator.js";

const router = Router();

router.post("/registro", validateRegistro, registro);

router.post('/login', validateLogin, login);

router.put("/logout", logout);

router.get("/:user/compras",verifyToken, getCompras);

export default router;