const { getAllCareers } = require("../repositories/careersRepository");

async function fetchAllCareers() {
  const careers = await getAllCareers();

  return careers.map((c) => ({
    id: c._id.toString(),
    name: c.name,
  }));
}

module.exports = {
  fetchAllCareers,
};
