import express, {} from "express";
const devRouter = express.Router();
import * as devController from "../controller/dev.controller.js";
devRouter.get("/test", devController.test);
devRouter.use(devController._404);
export default devRouter;
//# sourceMappingURL=dev.router.js.map