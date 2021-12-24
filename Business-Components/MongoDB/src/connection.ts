import mongoose from "mongoose";

export default class Connection {
  static _con: any;
  static hasConfigurations() {
    const configurations = ['MONGOURL', 'MONGODB'];

    configurations.forEach(config => {
      if (!(config in process.env)) {
        throw new Error(`Environment variable ${config} is not defined.`);
      }
    });
  }

  static async getDbConnection() {

    const dbConfig: mongoose.ConnectionOptions = {
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    try {
      this._con = await mongoose
        .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`, dbConfig);
      if (this._con) {
        console.log("MONGODB CONNECTED");
      }
    } catch (ex: any) {
      console.log(ex.message);
      this._con.Close();
      this._con = await mongoose
        .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`, dbConfig);
      console.log('Connection is not alive. Creatinng new connection.');
    };

    return this._con;
  }
}
