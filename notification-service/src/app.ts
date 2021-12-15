import express, {
  Express,
  Request,
  Response,
  NextFunction,
  json,
  urlencoded,
} from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";
import swaggerUI from "swagger-ui-express";
import passport from "passport";
import {
  handleSNSNotification,
  handleSNSNotificationHeader,
} from "@wisecaller/sns-notification-handler";

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
    this.app.use("/", (req: Request, res: Response, next: NextFunction) =>
      handleSNSNotificationHeader(req, res, next)
    );
    this.app.use(urlencoded({ extended: false }));
    this.app.use(json());
    this.app.use("/", (req: Request, res: Response, next: NextFunction) =>
      handleSNSNotification(req, res, next)
    );
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  async setupDbConnection() {
    import("./config/db/connection");
  }

  async setupRoutes() {
    try {
      let router = express.Router();
      this.app.use(`/notification-service/api/v1`, router);
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
