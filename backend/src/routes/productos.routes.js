import {Router} from "express";
import {createProducto, deleteProducto, getProductos, updateProducto} from "../controllers/productos.controller.js";

const router = Router();

router.get("/productos", getProductos);

router.post("/productos", createProducto);

router.put("/productos", updateProducto);

router.delete("/productos", deleteProducto);

export default router;