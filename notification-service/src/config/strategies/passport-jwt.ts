import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "../../models/user";

const options: any = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = "secret";

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      let user = await User.findOne(
        { _id: payload._id },
        { _id: 1, firstName: 1, lastName: 1, email: 1, mobileNo: 1 }
      );
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);
