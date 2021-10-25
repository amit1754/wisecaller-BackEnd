import express, { Express } from "express";
import UI from "swagger-ui-express";
import docs from "./api-docs";

export default class App {
  app: Express = express();

  init() {
    const routes = this.setupRoutes();
    Promise.all([routes])
      .then(() => {
        console.log("INIT COMPLETED");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  async setupRoutes() {
    try {
      let router = express.Router();
      this.app.use("/document-service", router);
      router.use("/api-docs", UI.serve, UI.setup(docs));
    } catch (error) {}
  }

  getExpressApp(): Express {
    return this.app;
  }
}
