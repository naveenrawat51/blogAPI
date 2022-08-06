const User = require("../models/auth");
const bcrypt = require("bcryptjs");
const { generateAccessToken } = require("../util/middleware");

exports.createUser = async (req, res, next) => {
  const username = req.body.username;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  const pwd = await bcrypt.hash(password, 12); // to hash the password

  const user = new User(username, phone, email, pwd);

  const userDetail = await user.isUserExists(email);
  if (userDetail) {
    return res.send({
      msg: "User already exist, so please login",
      status: false,
    });
  }

  user
    .save()
    .then((result) => {
      const token = generateAccessToken(user);
      const resData = {
        token,
        status: true,
      };
      return res.send(resData);
    })
    .catch((err) => {
      console.log("Error Occured!!");
    });
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findUser(email);
  if (!user) {
    return res.send({ msg: "User not registered", status: false });
  }

  //   res.setHeader("Set-Cookie", "loggedIn=true");
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.send({ msg: "Email or Password is not correct", status: false });
  }

  const token = generateAccessToken(user);
  const resData = {
    token,
    status: true,
  };
  return res.send(resData);
};
