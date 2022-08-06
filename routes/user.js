const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user");

// to create an article
router.post("/signup", createUser);

module.exports = router;
