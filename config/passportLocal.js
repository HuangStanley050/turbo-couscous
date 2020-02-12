const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  "local",
  new LocalStrategy(async (username, password, done) => {
    let user = await User.findOne({ email: username });
    if (!user) {
      return done(null, false, { msg: "no such user" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return done(null, false, { msg: "passport is wrong" });
    }
    return done(null, user);
  })
);
