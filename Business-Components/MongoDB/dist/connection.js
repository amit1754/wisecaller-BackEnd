"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Connection {
    static hasConfigurations() {
        const configurations = ['MONGOURL', 'MONGODB'];
        configurations.forEach((config) => {
            if (!(config in process.env)) {
                throw new Error(`Environment variable ${config} is not defined.`);
            }
        });
    }
    static getDbConnection() {
        try {
            mongoose_1.default
                .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`)
                .then(() => {
                console.log('MONGODB CONNECTED');
            })
                .catch((error) => {
                console.log(error.message);
            });
        }
        catch (ex) { }
        return this._con;
    }
}
exports.default = Connection;
