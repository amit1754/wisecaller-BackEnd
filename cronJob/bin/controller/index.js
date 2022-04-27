"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionController = exports.updateStatusController = exports.callHistoryController = void 0;
const callhistoryController_1 = __importDefault(require("./callhistoryController"));
const customStatusController_1 = __importDefault(require("./customStatusController"));
const subscriptionController_1 = __importDefault(require("./subscriptionController"));
exports.callHistoryController = new callhistoryController_1.default();
exports.updateStatusController = new customStatusController_1.default();
exports.subscriptionController = new subscriptionController_1.default();
