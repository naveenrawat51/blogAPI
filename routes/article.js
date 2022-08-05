const express = require("express");
const router = express.Router();
const {
  postAddProduct,
  getAllArticles,
  getLatestArticles,
  getSingleArticle,
} = require("../controllers/article");

// to create an article
router.post("/addArticle", postAddProduct);
// to get all the articles
router.get("/getAllArticles", getAllArticles);
// to get the latest article
router.get("/getLatestArticles", getLatestArticles);
// to get the details of single article
router.get("/getArticleDetails/:articleId", getSingleArticle);

module.exports = router;
