const { fetchAllCareers } = require("../services/careersService");

const careersHandler = {
  async GetAllCareers(call, callback) {
    try {
      const careers = await fetchAllCareers();
      callback(null, { careers });
    } catch (error) {
      console.error("Error in GetAllCareers:", error);
      callback(error, null);
    }
  },
};

module.exports = careersHandler;
