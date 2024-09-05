import { FastifyInstance } from "fastify";
import { registerRoute } from "./register-route";

async function router(fastify: FastifyInstance) {
  await fastify.register(registerRoute,{ prefix: '/usersetup' })
};

export { router }; 