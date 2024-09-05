import { IUserDTO } from "../entities/User";
import { IUserRepository } from "./IUserRepository";
import prismaClient from '../../prisma/prismaClient'

//userrepository ao ser associado com o metodo implements, assina um contrato com a interface chamada.
class UserRepository implements IUserRepository {
  async register( { name, email }: IUserDTO): Promise<void> {
    await prismaClient.user.create({
      data: {
        name,
        email,
      }
    });
  };
};

export { UserRepository };