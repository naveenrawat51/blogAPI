exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  req.session.isLoggedIn = true;

  //   res.setHeader("Set-Cookie", "loggedIn=true");
  res.send({ msg: "logged in" });
};
