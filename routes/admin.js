const express = require("express");
const router = express.Router();
const { postAddProduct } = require("../controllers/article");

router.post("/addArticle", postAddProduct);

module.exports = router;
