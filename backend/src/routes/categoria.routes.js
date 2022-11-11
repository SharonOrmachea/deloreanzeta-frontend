import {Router} from "express";
import {getCategoria, getCategorias, createCategoria, updateCategoria, deleteCategoria} from "../controllers/categoria.controller.js";

const router = Router();

router.get("/categoria/:id", getCategoria);

router.get("/categoria", getCategorias);

router.post("/categoria", createCategoria);

router.patch("/categoria/:id", updateCategoria);

router.delete("/categoria/:id", deleteCategoria);

export default router;