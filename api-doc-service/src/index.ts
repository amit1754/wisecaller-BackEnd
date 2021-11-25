import Application from "./app";


const application = new Application();
application.init();

export const app = application.getExpressApp();

app.listen(5001, () => {
  console.log("APPLICATION SERVER STARTED ON", 5001);
});
