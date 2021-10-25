import serverlessExpress from "serverless-http";
import { app } from "./index";
exports.api = serverlessExpress(app);
