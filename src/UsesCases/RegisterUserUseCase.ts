import { IUserDTO } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

class RegisterUserUseCase {
  constructor(private userRepository: IUserRepository) {};

  async execute({ name, email }: IUserDTO): Promise<void>{
    await this.userRepository.register({ name, email })
  }
};

export { RegisterUserUseCase } ;