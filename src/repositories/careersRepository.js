const { getDb } = require("../db/mongoClient");
const { ObjectId } = require("mongodb");

async function getAllCareers() {
  const db = await getDb();
  return db.collection('careers').find().toArray();
}

module.exports = {
  getAllCareers,
};
