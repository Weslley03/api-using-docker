import { FastifyInstance } from "fastify";
import { registerUserFactory } from "../UsesCases/RegisterUserFatory";

const registerUserController = registerUserFactory();

// eslint-disable-next-line @typescript-eslint/require-await
async function registerRoute(fastify: FastifyInstance) {
   
  fastify.post('/register-user', registerUserController.handle.bind(registerUserController));
};

export { registerRoute };