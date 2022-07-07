import serverlessExpress from "serverless-http";
const { app } = require("./index");
import "@wisecaller/mongo";
exports.api = serverlessExpress(app);
