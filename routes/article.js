const express = require('express');
const router = express.Router();
const { postAddProduct, getAllArticles } = require('../controllers/article');

router.post('/addArticle', postAddProduct);
router.get('/getAllArticles', getAllArticles);

module.exports = router;

// localhost:4000/api/addArticle   (to create the post)

// localhost:4000/api/getAllArticles   (to get post)
