import { FastifyInstance } from "fastify";
import { RegisterUserController } from "../../application/usescases/RegisterUserController";

const registerUserController = new RegisterUserController();

// eslint-disable-next-line @typescript-eslint/require-await
async function registerRoute(fastify: FastifyInstance) {
   
  fastify.post('/register-user', registerUserController.handle.bind(registerUserController));
};

export { registerRoute };