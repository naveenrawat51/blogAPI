const User = require("../models/auth");

exports.createUser = async (req, res, next) => {
  const username = req.body.username;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User(username, phone, email, password);

  const userDetail = await user.isUserExists(email);
  if (userDetail) {
    res.send({ msg: "User already exist, so please login", status: false });
    return;
  }

  user
    .save()
    .then((result) => {
      res.send({ msg: "New user created", status: true });
    })
    .catch((err) => {
      console.log("Error Occured!!");
    });
};

exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  req.session.isLoggedIn = true;

  //   res.setHeader("Set-Cookie", "loggedIn=true");
  res.send({ msg: "logged in" });
};
