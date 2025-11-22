import { NextFunction, Request, Response } from "express";
import { ProfileService } from "./profileService";

export class ProfileController {
    public static getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const result = ProfileService.getProfile();
            return res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }

    public static getTechStackList(req: Request, res:Response, next: NextFunction) {
        try {
            const result = ProfileService.getTechStackList();
            return res.status(200).json({ icons: result });
        } catch (error) {
            next(error);
        }
    }

    public static async getRepos(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await ProfileService.getRepos();
            return res.status(200).json({ repos: result });
        } catch (error) {
            next(error);
        }
    }
}