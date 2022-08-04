const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://naveen:India1819@article.rd6ashs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
let db;

const mongoConnect = async (callback) => {
  client.connect((err) => {
    db = client.db();
    callback();
  });
};

const getDb = () => {
  if (db) {
    return db;
  }

  throw "no database found!!";
};

module.exports = {
  mongoConnect,
  getDb,
};
