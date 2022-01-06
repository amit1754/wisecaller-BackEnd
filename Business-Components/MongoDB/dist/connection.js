"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Connection {
    static hasConfigurations() {
        const configurations = ['MONGOURL', 'MONGODB'];
        configurations.forEach(config => {
            if (!(config in process.env)) {
                throw new Error(`Environment variable ${config} is not defined.`);
            }
        });
    }
    static async getDbConnection() {
        const dbConfig = {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
        try {
            this._con = await mongoose_1.default
                .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`, dbConfig);
            if (this._con) {
                console.log("MONGODB CONNECTED");
            }
        }
        catch (ex) {
            console.log(ex.message);
            this._con.Close();
            this._con = await mongoose_1.default
                .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`, dbConfig);
            console.log('Connection is not alive. Creatinng new connection.');
        }
        ;
        return this._con;
    }
}
exports.default = Connection;
