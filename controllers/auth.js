const User = require("../models/User");
const bcrypt = require("bcryptjs");

const isEmailValid = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  try {
    if (!isEmailValid(email)) {
      throw new Error("Email is not valid");
    }

    let user = await User.findOne({ email });
    //console.log(user);
    if (user) {
      //throw new Error("User already exists");
      throw new Error("User already exists");
    }
    const newUser = new User({ email, password: hash });
    //pre-load badges with unlocked: false as default setting

    let registerUser = await newUser.save();
    return res.send({ msg: "user registered", registerUser });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ msg: err.message });
  }
};
