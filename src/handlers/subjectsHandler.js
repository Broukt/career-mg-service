const { fetchAllSubjects } = require("../services/subjectsService");

const subjectsHandler = {
  async GetAllSubjects(call, callback) {
    try {
      const subjects = await fetchAllSubjects();
      callback(null, { subjects });
    } catch (error) {
      console.error("Error in GetAllSubjects:", error);
      callback(error, null);
    }
  },
};

module.exports = subjectsHandler;
