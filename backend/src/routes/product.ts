import { ProductController } from "../controller/ProductController";
import {Router} from "express";

const router = Router();

router.get("/", [/*checkJwt, checkRole(['admin'])*/], ProductController.getAll);

router.get("/:id", [/*checkJwt, checkRole(['admin'])*/], ProductController.getById);

router.post("/", [/*checkJwt, checkRole(['admin'])*/], ProductController.newProduct);

//router.patch("/:id", [/*checkJwt, checkRole(['admin'])*/], ProductController.editProduct);

//router.delete("/:id", [/*checkJwt, checkRole(['admin'])*/], ProductController.deleteProduct);

export default router;