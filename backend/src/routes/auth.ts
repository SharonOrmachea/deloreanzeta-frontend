import {Router} from "express";
import AuthController from "../controller/AuthController";
import { checkJwt } from "../middlewares/jwt";
import { validateLogin, validatePassword } from "../middlewares/users.validator";

const router = Router();

//login 
router.post("/login", validateLogin, AuthController.login);

//Forgot password
router.put("/forgot-password", AuthController.forgotPassword);

//Create new password
router.put("/new-password", AuthController.createNewPassword);

//Change password
router.post("/change-password", validatePassword, [checkJwt], AuthController.changePassword);


export default router;
