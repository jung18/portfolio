import express from "express";
import { GithubController } from "./githubController";

const router = express.Router();

router.get("/repos", GithubController.getRepos);

export default router;