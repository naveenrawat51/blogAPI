const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

const mongoConnect = async (callback) => {
  const uri = process.env.CONNECTION_STRING;

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
