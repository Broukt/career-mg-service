const { getDb } = require('../db/mongoClient');
const { ObjectId } = require('mongodb');

async function getAllRelationships() {
  const db = await getDb();;
  return await db.collection('subjectRelationships').find().toArray();  
}

module.exports = {
  getAllRelationships
};
