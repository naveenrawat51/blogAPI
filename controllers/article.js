const Article = require("../models/article");

exports.postAddProduct = (req, res, next) => {
  const articleName = req.body.articleName;
  const articleAuthor = req.body.articleAuthor;
  const ArticleDescription = req.body.ArticleDescription;
  const creationDate = req.body.creationDate;
  const category = req.body.category;
  const article = new Article(
    articleName,
    articleAuthor,
    ArticleDescription,
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
