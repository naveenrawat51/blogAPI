const mongodb = require("mongodb");
const { getDb } = require("../util/database");

class Article {
  constructor(
    articleName,
    articleAuthor,
    articleDescription,
    creationDate,
    category,
    userId
  ) {
    this.articleName = articleName;
    this.articleAuthor = articleAuthor;
    this.articleDescription = articleDescription;
    this.creationDate = creationDate;
    this.category = category;
    this.userId = userId ? new mongodb.ObjectId(id) : null;
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

  static fetchLatest() {
    const db = getDb();
    return db
      .collection("articles")
      .find()
      .limit(10)
      .sort({ x: 1 })
      .toArray()
      .then((articles) => {
        console.log(articles);
        return articles;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchArticleDetails(articleId) {
    const db = getDb();
    return db
      .collection("articles")
      .find({ _id: new mongodb.ObjectId(articleId) })
      .next()
      .then((articles) => articles)
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Article;
