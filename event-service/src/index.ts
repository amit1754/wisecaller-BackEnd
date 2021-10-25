import Application from "./app";
import { config } from "dotenv";
config({ path: ".env" });

const application = new Application();
application.init();

export const app = application.getExpressApp();

app.listen(process.env.PORT, () => {
  console.log("APPLICATION SERVER STARTED ON", process.env.PORT);
});
