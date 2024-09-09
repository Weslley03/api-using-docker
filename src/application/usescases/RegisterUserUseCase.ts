import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IUserDTO } from "../../domain/entities/User";
import { inject, injectable } from "tsyringe";

@injectable()
class RegisterUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
    ) {};

  async execute({ name, email }: IUserDTO): Promise<void>{
    await this.userRepository.register({ name, email })
  }
};

export { RegisterUserUseCase } ;