import { Request, Response, NextFunction } from "express";
import { GithubService } from "./githubAPIService";

export class GithubController {
    public static async getRepos(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await GithubService.getRepos();
            return res.status(200).json({ repos: result });
        } catch (error) {
            next(error);
        }
    }
}