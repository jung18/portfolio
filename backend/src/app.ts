import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import path from "path";
import ProfileRouter from "./profile/profileRouter";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const httpPort = 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/static", express.static(path.join(__dirname, "../public")));
app.use("/api", ProfileRouter);
app.use((req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
        status: "error",
        message: "API not found"
    });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    const message = error.message || "Internal server error";
    return res.status(500).json({
        status: "error",
        message: message
    });
});

httpServer.listen(httpPort, "0.0.0.0", () => {
    console.log(`http server started on port ${httpPort}`);
});