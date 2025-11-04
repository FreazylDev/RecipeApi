import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/_router.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(cookieParser());
app.use(router);


const mongoURI = process.env.MONGO_URI;
if (!mongoURI) throw new Error("MongoURI variable in .env not set!");

mongoose.connect(mongoURI)
    .then(() => {
        app.listen(port, () => {
            console.log("Server listening...")
            console.log("http://localhost:3000/")
        })
    })
    .catch(() => {
        throw new Error("MongoDB connection failed");
    })