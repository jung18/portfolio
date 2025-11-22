import express from "express";
import { ProfileController } from "./profileController";

const router = express.Router();

router.get("/tech-stacks", ProfileController.getTechStackList);
router.get("/profile", ProfileController.getProfile);

export default router;