import { Request, Response, NextFunction } from "express";
import { GithubService } from "./githubAPIService";

export class GithubController {
    public static async getRepos(req: Request, res: Response, next: NextFunction) {
        try {
            const result = GithubService.getRepositories();
            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}