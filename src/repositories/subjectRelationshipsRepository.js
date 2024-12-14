const { getDb } = require('../db/mongoClient');
const { ObjectId } = require('mongodb');
let pipeline;

async function getAllRelationships() {
  const db = await getDb();;
  return await db.collection('subjectRelationships').find().toArray();  
}

async function getPrerequisitesForEverySubject() {
  const db = await getDb();
  const relationships = await db.collection('subjectRelationships').find().toArray();
  const prerequisites = relationships.reduce((acc, relationship) => {
    if (!acc[relationship.subject_code]) {
      acc[relationship.subject_code] = [];
    }
    acc[relationship.subject_code].push(relationship.prerequisite_code);
    return acc;
  }, {});
  return prerequisites;
}

async function getPostrequisitesForEverySubject() {
  const db = await getDb();
  const relationships = await db.collection('subjectRelationships').find().toArray();
  const postrequisites = relationships.reduce((acc, relationship) => {
    if (!acc[relationship.prerequisite_code]) {
      acc[relationship.prerequisite_code] = [];
    }
    acc[relationship.prerequisite_code].push(relationship.subject_code);
    return acc;
  }, {});
  return postrequisites;
}

module.exports = {
  getAllRelationships,
  getPrerequisitesForEverySubject,
  getPostrequisitesForEverySubject
};
