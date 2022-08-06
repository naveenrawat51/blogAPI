const { MongoClient, ServerApiVersion } = require("mongodb");
const { connection_str } = require("../config");

let db;

const mongoConnect = async (callback) => {
  const uri = connection_str;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
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
