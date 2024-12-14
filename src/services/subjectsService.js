const { getAllSubjects } = require("../repositories/subjectsRepository");

async function fetchAllSubjects() {
  const subjects = await getAllSubjects();

  return subjects.map((s) => ({
    id: s._id.toString(),
    code: s.code,
    name: s.name,
    department: s.department,
    credits: s.credits,
    semester: s.semester,
  }));
}

module.exports = { fetchAllSubjects };
