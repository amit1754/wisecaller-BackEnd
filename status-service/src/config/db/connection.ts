import mongoose from "mongoose";
import {User} from "../../models/user"
mongoose
  .connect(`${process.env.MONGOURL}${process.env.MONGODB}?authSource=admin`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    User.find().then((user:any) => {console.log(user)})
    console.log("MONGODB CONNECTED");
  })
  .catch((error) => {
    console.log(error.message);
  });
