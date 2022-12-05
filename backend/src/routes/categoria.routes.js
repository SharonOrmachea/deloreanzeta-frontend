import {Router} from "express";
import {getCategoria, getCategorias, createCategoria, updateCategoria, deleteCategoria} from "../controllers/categoria.controller.js";
import {validateCategoria} from "../validators/categoria.validator.js";

const router = Router();

router.get("/categoria/:id", getCategoria);

router.get("/categoria", getCategorias);

router.post("/categoria", validateCategoria, createCategoria);

router.patch("/categoria/:id", validateCategoria, updateCategoria);

router.delete("/categoria/:id", deleteCategoria);

export default router;