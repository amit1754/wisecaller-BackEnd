import passport from "passport";
import { Strategy } from "passport-local";

passport.use(
  "local-login",
  new Strategy({ usernameField: "mobileNo" }, (username, password, done) => {
    console.log(username);
    console.log(password);
  })
);

export default passport;
