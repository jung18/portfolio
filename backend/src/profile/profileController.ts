import { ProfileData } from "@/common/interface";
import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

const profileData: ProfileData = JSON.parse(fs.readFileSync(path.join(__dirname, "../../conf/portfolio.json"), "utf-8"))
const icons = fs.readdirSync(path.join(__dirname, "../../public/icons"));
const techStackList = icons.map(file => `/static/icons/${file}`);

export class ProfileController {
    public static getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            return res.status(200).json(profileData);
        } catch (error) {
            next(error);
        }
    }

    public static getTechStackList(req: Request, res:Response, next: NextFunction) {
        try {
            return res.status(200).json({ icons: techStackList });
        } catch (error) {
            next(error);
        }
    }
}