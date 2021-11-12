import mongoose from "mongoose";

mongoose
  .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MONGODB CONNECTED");
  })
  .catch((error) => {
    console.log(error.message);
  });
