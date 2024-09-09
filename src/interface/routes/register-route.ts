import { FastifyInstance } from "fastify";
import { RegisterUserController } from "../../application/usescases/RegisterUserController";
import { validateUserSchemaZod } from "../../infrastructure/middlewares/validation-middleware";
import { IUserDTO } from "../../domain/entities/User";

const registerUserController = new RegisterUserController();

// eslint-disable-next-line @typescript-eslint/require-await
async function registerRoute(fastify: FastifyInstance) {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  fastify.post<{ Body: IUserDTO }>('/register-user', { preHandler: validateUserSchemaZod }, registerUserController.handle.bind(registerUserController));
};

export { registerRoute };