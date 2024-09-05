import { UserRepository } from '../../domain/repositories/UserRepository';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
