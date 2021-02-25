import express from "express";
import prisma from "@prisma/client";
import cors from "cors";
/* routes */
import { register, login, logout } from "./controllers/auth.js";
import userRoutes from "./controllers/users.js";
import tweetRoutes from "./controllers/tweets.js";
import commentRoutes from "./controllers/comments.js";

/* Instanced Modules */
const app = express();

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
/* Config */
const PORT = process.env.PORT || 4000;

/* Middleware */
app.use(express.json());
app.use(cors());

/* routes */
app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/register", register);
app.use("/api/login", login);
/* FIXME: */
app.use("/api/logout", logout);

app.get("/", function (request, response) {
  response.send("Welcome to SQL");
});

/* Sever Listener */

app.listen(PORT, function () {
  console.log(`Server is live on ${PORT}`);
});
