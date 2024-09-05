import { IUserDTO } from "../entities/User";

interface IUserRepository {
  register(userData: IUserDTO): Promise<void>;
};

export { IUserRepository };