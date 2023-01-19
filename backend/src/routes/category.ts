import { CategoryController } from "../controller/CategoryController";
import {Router} from "express";
import { checkRole } from "../middlewares/role";

const router = Router();

router.get("/", [/*checkJwt, checkRole(['admin'])*/], CategoryController.getAll);

router.get("/:id", [/*checkJwt, checkRole(['admin'])*/], CategoryController.getById);

router.post("/", [/*checkJwt, checkRole(['admin'])*/], CategoryController.newCategory);

router.patch("/:id", [/*checkJwt, checkRole(['admin'])*/], CategoryController.editCategory);

router.delete("/:id", [/*checkJwt, checkRole(['admin'])*/], CategoryController.deleteCategory);

export default router;