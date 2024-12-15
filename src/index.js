require("dotenv").config();
const grpc = require("@grpc/grpc-js");
const createServer = require("./server");
const { connectMongo, closeMongo } = require("./db/mongoClient");
const { seed } = require('./db/seeder');
const { GRPC_SERVER_ADDRESS } = require("./config");

(async function main() {
  try {
    await connectMongo();
    await seed();
    const server = createServer();
    server.bindAsync(
      GRPC_SERVER_ADDRESS,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          console.error("Failed to bind gRPC server:", err);
          process.exit(1);
        }
        console.log(
          "CareerService gRPC server is listening on",
          GRPC_SERVER_ADDRESS
        );
      }
    );

    process.on("SIGINT", async () => {
      console.log("Shutting down gRPC server");
      await closeMongo();
      process.exit(0);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
})();
