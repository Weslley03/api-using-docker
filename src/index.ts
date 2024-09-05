import fastify from "fastify";
import { router } from "./routes/index-routes";

const server = fastify();

server.register(router);

const PORT = 3000;
server.listen({port: PORT, host: '0.0.0.0'}, (err, addres) => {
  if(err) {
    console.error(err);
    process.exit(1);
  };
  console.log(`server running in ${addres}`);
});
