import { GithubRepo } from "@/common/interface";
import axios from "axios";
import { cache } from "@/common/cache";
import { ProfileData } from "@/common/interface";
import fs from "fs";
import path from "path";

const profileData: ProfileData = JSON.parse(fs.readFileSync(path.join(__dirname, "../../conf/portfolio.json"), "utf-8"))
const icons = fs.readdirSync(path.join(__dirname, "../../public/icons"));
const techStackList = icons.map(file => `/static/icons/${file}`);

export class ProfileService {
    private static readonly BASE_URL = "https://api.github.com";
    private static readonly USERNAME = "jung18";
    private static readonly GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    private static readonly CACHE_KEY = "github_repos";

    public static getProfile() {
        return profileData;
    }

    public static getTechStackList() {
        return techStackList;
    }

    public static async getRepos() {
        let repos = this.getCache();
        if (repos != null) {
            return repos;
        }
        // cache update
        const response = await this.getPublicRepositories();
        repos = response.map(repo => ({
            name: repo.name,
            fullName: repo.full_name,
            url: repo.html_url,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            updatedAt: repo.updated_at
        }));
        cache.set(this.CACHE_KEY, repos);
        return repos;
    }

    private static async getPublicRepositories() {
        const url = `${this.BASE_URL}/users/${this.USERNAME}/repos?sort=updated&per_page=100`;
        const response = await axios.get<any[]>(url, {
            headers: {
                "Accept": "application/vnd.github+json",
                ...(this.GITHUB_TOKEN && { "Authorization": `Bearer ${this.GITHUB_TOKEN}` }),
                "User-Agent": "My-Portfolio"
            },
            timeout: 5000
        });
        return response.data;
    }

    private static getCache(): GithubRepo[] | null {
        return cache.get<GithubRepo[]>(this.CACHE_KEY) ?? null;
    }
}