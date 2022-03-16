import mongoose from 'mongoose';

export default class Connection {
  static _con: any;
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
      mongoose
        .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`)
        .then(() => {
          console.log('MONGODB CONNECTED');
        })
        .catch((error: any) => {
          console.log(error.message);
        });
    } catch (ex: any) {}

    return this._con;
  }
}
