const {
  getAllRelationships,
} = require("../repositories/subjectRelationshipsRepository");

async function fetchAllRelationships() {
  const relationships = await getAllRelationships();
  return relationships.map((r) => ({
    id: r._id,
    subjectCode: r.subject_code,
    prerequisiteCode: r.prerequisite_code,
  }));
}

async function fetchPrerequisitesPerSubject() {
  const relationships = await getAllRelationships();
  const prerequisitesPerSubject = relationships.reduce((acc, r) => {
    if (!acc[r.subject_code]) {
      acc[r.subject_code] = [];
    }

    acc[r.subject_code].push(r.prerequisite_code);

    return acc;
  }, {});
  return Object.keys(prerequisitesPerSubject).map((subjectCode) => ({
    subjectCode,
    prerequisiteCodes: prerequisitesPerSubject[subjectCode],
  }));
}

async function fetchPostrequisitesPerSubject() {
  const relationships = await getAllRelationships();
  const postrequisitesPerSubject = relationships.reduce((acc, r) => {
    if (!acc[r.prerequisite_code]) {
      acc[r.prerequisite_code] = [];
    }

    acc[r.prerequisite_code].push(r.subject_code);

    return acc;
  }, {});
  return Object.keys(postrequisitesPerSubject).map((subjectCode) => ({
    subjectCode,
    postrequisiteCodes: postrequisitesPerSubject[subjectCode],
  }));
}

module.exports = {
  fetchAllRelationships,
  fetchPrerequisitesPerSubject,
  fetchPostrequisitesPerSubject,
};
