const path = require("path");
const grpc = require("@grpc/grpc-js");
const { ReflectionService } = require("@grpc/reflection");
const protoLoader = require("@grpc/proto-loader");
const careersHandler = require("./handlers/careersHandler");
const subjectsHandler = require("./handlers/subjectsHandler");
const subjectRelationshipsHandler = require("./handlers/subjectRelationshipsHandler");
const { GRPC_SERVER_ADDRESS } = require("./config");

const PROTO_PATH = path.join(__dirname, "..", "proto", "careers.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const careersProto = protoDescriptor.careers;

function createServer() {
  const server = new grpc.Server();
  server.addService(careersProto.CareersService.service, careersHandler);
  server.addService(careersProto.SubjectsService.service, subjectsHandler);
  server.addService(careersProto.SubjectRelationshipsService.service, subjectRelationshipsHandler);
  const reflection = new ReflectionService(packageDefinition);
  reflection.addToServer(server);
  return server;
}

module.exports = createServer;
