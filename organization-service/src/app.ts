import express, {
  Express,
  Request,
  Response,
  NextFunction,
  text,
} from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

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
    this.app.use(json({ limit: "50mb" }));
    this.app.use(urlencoded({ extended: true, limit: "50mb" }));

    this.app.use(text());
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  async setupDbConnection() {
    await import("@wisecaller/mongo");
  }

  async setupRoutes() {
    try {
      let router = express.Router();
      this.app.use(`/organization-service/api/v1`, router);

      router.use("/", routes);
      this.app.use(function (req: Request, res: Response, next: NextFunction) {
        const error = new Error("The requested endpoint is not  found.");
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
