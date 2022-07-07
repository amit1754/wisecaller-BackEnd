
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
export default class Connection {
  static isConnected: any;
  static hasConfigurations() {
    const configurations = ['MONGOURL', 'MONGODB'];

    configurations.forEach((config) => {
      if (!(config in process.env)) {
        throw new Error(`Environment variable ${config} is not defined.`);
      }
    });
  }

  static ConnectDb() {
    try {
      if (this.isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }
    
    console.log('=> using new database connection');
    return mongoose.connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`).then(db => {
        this.isConnected = db.connections[0].readyState;
        console.log("DB Connected success");
    }, err =>{console.log("Error creating DB connection", err)})
    } catch (ex: any) {console.log("Error creating DB connection", ex)}

    return this.isConnected;
  }
}
