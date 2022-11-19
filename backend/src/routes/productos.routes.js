import {Router} from "express";
import {createProducto, deleteProducto, getProducto, getProductos, updateProducto} from "../controllers/productos.controller.js";

const router = Router();

router.get("/producto/:id", getProducto);

router.get("/producto", getProductos);

router.post("/producto", createProducto);

router.patch("/producto/:id", updateProducto);

router.delete("/producto/:id", deleteProducto);

export default router;