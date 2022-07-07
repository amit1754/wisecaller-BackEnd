import Application from "./app";
import { config } from "dotenv";
process.env.ENVIRONMENT = "dev";
config({ path: `.env.${process.env.ENVIRONMENT}` });

import Connection from "@wisecaller/mongo";
Connection.ConnectDb();
const application = new Application();
application.init();

export const app = application.getExpressApp();

app.listen(process.env.PORT, () => {
  console.log("APPLICATION SERVER STARTED ON", process.env.PORT);
});
