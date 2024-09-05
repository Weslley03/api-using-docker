import { UserRepository } from "../repositories/UserRepository";
import { RegisterUserController } from "./RegisterUserController";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

function registerUserFactory() {
  const userRepository = new UserRepository();
  const registerUserUseCase = new RegisterUserUseCase(userRepository);
  const registerUserController = new RegisterUserController(registerUserUseCase);

  return registerUserController;
};

export { registerUserFactory };