"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callHistory_1 = require("../models/callHistory");
const moment_1 = __importDefault(require("moment"));
class CallHistoryController {
    removeHistory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // create data before days
                let dateFrom = (0, moment_1.default)().subtract(process.env.CALLHISTORYDAYS, "d");
                // find the records before the days
                let callHistory = yield callHistory_1.CallHistory.find({
                    time: { $lte: dateFrom },
                });
                // remove the data
                for (let i = 0; i < callHistory.length; i++) {
                    yield callHistory_1.CallHistory.findByIdAndRemove(callHistory[i]._id);
                }
                response.status(200).json({ success: true, message: "success" });
            }
            catch (err) {
                response.status(500).json({ success: false, message: "failed" });
            }
        });
    }
}
exports.default = CallHistoryController;
