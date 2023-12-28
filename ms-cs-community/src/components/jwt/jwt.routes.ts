import { Router } from "express";
import jwtController from "./jwt.controller";

const router = Router()

router.route('/').get(jwtController.createToken)

export default router;
