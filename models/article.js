const { getDb } = require("../util/database");

class Article {
  constructor(
    articleName,
    articleAuthor,
    ArticleDescription,
    creationDate,
    category
  ) {
    this.articleName = articleName;
    this.articleAuthor = articleAuthor;
    this.ArticleDescription = ArticleDescription;
    this.creationDate = creationDate;
    this.category = category;
  }

  save() {
    const db = getDb();
    return db
      .collection("articles")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("articles")
      .find()
      .toArray()
      .then((articles) => {
        console.log(articles);
        return articles;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Article;
