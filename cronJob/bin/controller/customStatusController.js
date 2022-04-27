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
const customStatus_1 = require("../models/customStatus");
const moment_1 = __importDefault(require("moment"));
class customStatusController {
    removeStatus(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dateFrom = (0, moment_1.default)().subtract(process.env.CALLHISTORYDAYS, "d");
                const all_status = yield customStatus_1.customStatus.find({
                    end_date: { $lte: dateFrom },
                });
                for (let i = 0; i < all_status.length; i++) {
                    yield customStatus_1.customStatus.findByIdAndRemove(all_status[i]._id);
                }
                response
                    .status(200)
                    .json({ success: true, message: "success" });
            }
            catch (err) {
                response.status(500).json({ success: false, message: "failed" });
            }
        });
    }
}
exports.default = customStatusController;
