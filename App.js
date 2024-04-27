import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/Users/routes.js";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import session from "express-session";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

const sessionOptions = {
    secret: "secret",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
  }
  

app.use(session(sessionOptions));

app.use(express.json());



UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

app.listen(4000);