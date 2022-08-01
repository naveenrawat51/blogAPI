const express = require("express");
const router = express.Router();

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.send(200);
});

module.exports = router;
