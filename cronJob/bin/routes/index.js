"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const callHistory_1 = require("./callHistory");
const customstatus_1 = require("./customstatus");
const subscription_1 = require("./subscription");
const router = express_1.default.Router();
router.use("/remove_history", callHistory_1.removeHistoryRoutes);
router.use("/remove_status", customstatus_1.statusRoutes);
router.use("/subscription-end", subscription_1.subscriptionRoutes);
exports.default = router;
