import {Router} from "express";
import { ProductController } from "../controller/ProductController";
import { validateProduct } from "../middlewares/product.validator";
const router = Router();

router.get("/", [/*checkJwt, checkRole(['admin'])*/], ProductController.getAll);

router.get("/:id", [/*checkJwt, checkRole(['admin'])*/], ProductController.getById);

router.post("/", validateProduct, [/*checkJwt, checkRole(['admin']),*/], ProductController.newProduct);

router.patch("/:id", validateProduct, [/*checkJwt, checkRole(['admin'])*/], ProductController.editProduct);

//router.delete("/:id", [/*checkJwt, checkRole(['admin'])*/], ProductController.deleteProduct);

router.get("/category/:category", [/*checkJwt, checkRole(['admin'])*/], ProductController.getAllProductscategory);


export default router;