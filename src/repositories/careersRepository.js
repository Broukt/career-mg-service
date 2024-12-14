const { getDb } = require("../db/mongoClient");
const { COLLECTION_NAME } = require("../config");
const { ObjectId } = require("mongodb");

async function getAllCareers() {
  const db = await getDb();
  return db.collection(COLLECTION_NAME).find().toArray();
}

module.exports = {
  getAllCareers,
};
