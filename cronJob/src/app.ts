import express, {
  Express,
  Request,
  Response,
  NextFunction,
  json,
  urlencoded,
} from "express";
import routes from "./routes";
import Connection from "@wisecaller/mongo";

export default class App {
  app: Express = express();

  init() {
    const dbConnection = this.setupDbConnection();
    const middlewares = this.setupMiddleware();
    const routes = this.setupRoutes();

    Promise.all([dbConnection, middlewares, routes])
      .then(() => {
        console.log("INIT COMPLETE");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  async setupMiddleware() {
    this.app.use(json());

    this.app.use(urlencoded({ extended: false }));
    this.app.use(json());
  }

  async setupDbConnection() {
    await Connection.getDbConnection();
  }

  async setupRoutes() {
    try {
      let router = express.Router();
      this.app.use(`/cron-service/api/v1`, router);
      router.use("/", routes);
      this.app.use(function (req: Request, res: Response, next: NextFunction) {
        const error = new Error("The requested endpoint is not found.");
        res.status(404);
        next(error);
      });
    } catch (error) {
      console.log(error);
    }
  }

  getExpressApp(): Express {
    return this.app;
  }
}
