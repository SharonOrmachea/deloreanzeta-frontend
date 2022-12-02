import {Router} from "express";
import {createProducto, deleteProducto, getProducto, getProductos, updateProducto} from "../controllers/productos.controller.js";
import {validateProducto} from "../validators/producto.validator.js";
const router = Router();

router.get("/producto/:id", getProducto);

router.get("/producto", getProductos);

router.post("/producto", validateProducto,createProducto);

router.patch("/producto/:id", validateProducto, updateProducto);

router.delete("/producto/:id", deleteProducto);

export default router;