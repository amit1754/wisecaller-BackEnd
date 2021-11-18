import passport from "passport";
import { Strategy } from "passport-local";

passport.use(
  "local-login",
  new Strategy({ usernameField: "mobileNo" }, (username, password, done) => {})
);

export default passport;
