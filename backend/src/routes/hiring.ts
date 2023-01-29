import {Router} from "express";
import HiringController from "../controller/HiringController";

const router = Router();

//Send email
router.post("/send-email"/*, validateLogin*/, HiringController.sendEmails);

export default router;