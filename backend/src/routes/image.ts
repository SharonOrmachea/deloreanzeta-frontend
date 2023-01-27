import { Router } from "express";
import { storage } from "../middlewares/storage.multer";

const router = Router();

router.post('/photos/upload', storage.array('photos', 12), function (req, res, next) {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})

export default router;