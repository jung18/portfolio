import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import http from "http";
import cors from "cors";
import path from "path";
import ProfileRouter from "./profile/profileRouter";
import GithubRouter from "./github/githubRouter";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const httpPort = 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: false
}));

app.use("/static", express.static(path.join(__dirname, "../public")));

app.use("/api/profile", ProfileRouter);
app.use("/api/github", GithubRouter);


httpServer.listen(httpPort, () => {
    console.log(`http server started on ${httpPort}`);
})