const { MongoClient } = require("mongodb");
const { MONGO_URI, DATABASE_NAME } = require("../config");

let client;
let db;

async function connectMongo() {
  if (!client) {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    db = client.db(DATABASE_NAME);
    console.log("Connected to MongoDB");
  }
  return db;
}

async function getDb() {
  if (!db) {
    await connectMongo();
  }
  return db;
}

async function closeMongo() {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log("Closed MongoDB connection");
  }
}

module.exports = {
  connectMongo,
  getDb,
  closeMongo,
};
