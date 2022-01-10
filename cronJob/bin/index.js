"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app_1 = __importDefault(require("./app"));
const dotenv_1 = require("dotenv");
process.env.ENVIRONMENT = "dev";
(0, dotenv_1.config)({ path: `.env` });
const application = new app_1.default();
application.init();
exports.app = application.getExpressApp();
exports.app.listen(process.env.PORT, () => {
    console.log("APPLICATION SERVER STARTED ON", process.env.PORT);
});
