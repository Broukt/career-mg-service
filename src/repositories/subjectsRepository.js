const { getDb } = require('../db/mongoClient');

async function getAllSubjects() {
  const db = await getDb();
  return db.collection('subjects').find().toArray();
}

module.exports = {
  getAllSubjects
};
