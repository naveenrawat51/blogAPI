const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers/auth");

// to create an article
router.post("/signup", createUser);
// to login
router.get("/login", login);

module.exports = router;
