const Article = require("../models/article");

exports.postAddProduct = (req, res, next) => {
  const articleName = req.body.articleName;
  const articleAuthor = req.body.articleAuthor;
  const articleDescription = req.body.articleDescription;
  const creationDate = req.body.creationDate;
  const category = req.body.category;
  const article = new Article(
    articleName,
    articleAuthor,
    articleDescription,
    creationDate,
    category
  );

  article
    .save()
    .then((result) => {
      console.log("Article Created!!");
      res.send(200);
    })
    .catch((err) => {
      console.log("Error Occured!!");
    });
};

exports.getAllArticles = (req, res, next) => {
  Article.fetchAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("Error Occured!!");
    });
};

exports.getLatestArticles = (req, res, next) => {
  Article.fetchLatest()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("Error Occured!!");
    });
};

exports.getSingleArticle = (req, res, next) => {
  const articleId = req.params.articleId;
  Article.fetchArticleDetails(articleId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("Error Occured!!");
    });
};
