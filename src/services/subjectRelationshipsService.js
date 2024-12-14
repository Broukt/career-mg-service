const {
  getAllRelationships,
  getPrerequisitesForEverySubject,
  getPostrequisitesForEverySubject,
} = require("../repositories/subjectRelationshipsRepository");

async function fetchAllRelationships() {
    const relationships = await getAllRelationships();

    return relationships.map((r) => ({
        subject_code: r.subject_code,
        prerequisite_code: r.prerequisite_code,
        id: r._id,
    }));
}

async function fetchPrerequisitesPerSubject() {
    const prerequisitesPerSubject = await getPrerequisitesForEverySubject();

    return prerequisitesPerSubject.map((p) => ({
        
    }))
}

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
