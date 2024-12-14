const { fetchAllCareers } = require("../services/careersService");

const careersHandler = {
  async GetAll(call, callback) {
    try {
      const careers = await fetchAllCareers();
      callback(null, { careers });
    } catch (error) {
      console.error("Error in GetAll:", error);
      callback(error, null);
    }
  },
};

module.exports = careersHandler;
