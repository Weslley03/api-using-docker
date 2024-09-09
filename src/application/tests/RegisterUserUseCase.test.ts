import { IUserDTO } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { RegisterUserUseCase } from "../usescases/RegisterUserUseCase";

const RegisterUserUseCaseMocked = RegisterUserUseCase as jest.Mock<RegisterUserUseCase>

const UserRepositoryMocked: UserRepository = {
  register: jest.fn().mockResolvedValueOnce({})
}

describe('register user use case', () => {
  
  let sut: RegisterUserUseCase;

  beforeEach(() => {
    sut = new RegisterUserUseCaseMocked(UserRepositoryMocked);
  });

  test('should be able register new user', async () => {
    const data: IUserDTO = {
      name: 'weslley',
      email: 'weslley@hotmail.com'
    };

    const response = await sut.execute(data); 

    expect(response).toBe(undefined);
  });
});