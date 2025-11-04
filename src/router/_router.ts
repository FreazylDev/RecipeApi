import express from "express";
import apiRouter from "./api.router.js";

import * as _controller from "../controller/_controller.js";
import devRouter from "./dev.router.js";


const router = express.Router();

router.get("/", _controller.index);

router.use("/dev", devRouter);

router.use("/api/", apiRouter);

router.use(_controller._404);

export default router;