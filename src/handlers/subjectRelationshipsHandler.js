const {
  fetchAllRelationships,
  fetchPrerequisitesPerSubject,
  fetchPostrequisitesPerSubject,
} = require("../services/subjectRelationshipsService");

const subjectRelationshipsHandler = {
  async GetAllRelationships(call, callback) {
    try {
      const relationships = await fetchAllRelationships();
      callback(null, { relationships });
    } catch (error) {
      console.error("Error in GetAllRelationships:", error);
      callback(error, null);
    }
  },
  async GetPrerequisitesMap(call, callback) {
    try {
      const prerequisites = await fetchPrerequisitesPerSubject();
      callback(null, { prerequisites });
    } catch (error) {
      console.error("Error in GetPrerequisitesPerSubject:", error);
      callback(error, null);
    }
  },
  async GetPostrequisitesMap(call, callback) {
    try {
      const postrequisites = await fetchPostrequisitesPerSubject();
      callback(null, { postrequisites });
    } catch (error) {
      console.error("Error in GetPostrequisitesPerSubject:", error);
      callback(error, null);
    }
  },
};

module.exports = subjectRelationshipsHandler;
