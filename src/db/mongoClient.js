const { MongoClient } = require("mongodb");
const { MONGO_URI, DATABASE_NAME } = require("../config");

let client;
let db;

async function connectMongo() {
  if (!client) {
    client = new MongoClient(MONGO_URI);
    await client.connect();
    db = client.db(DATABASE_NAME);
    if (db.collection("subjects"))
      db.dropCollection("subjects");
    if (db.collection("subjectRelationships"))
      db.dropCollection("subjectRelationships");
    if (db.collection("careers"))
      db.dropCollection("careers");
    db.createCollection("subjects");
    db.createCollection("subjectRelationships");
    db.createCollection("careers");
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
