import { FastifyReply, FastifyRequest } from "fastify";
import { IUserDTO } from "../entities/User";
import { RegisterUserUseCase } from "./RegisterUserUseCase";

class RegisterUserController {
  constructor(private useCase: RegisterUserUseCase) {}

  async handle(req: FastifyRequest<{ Body: IUserDTO }>, reply: FastifyReply): Promise<FastifyReply | undefined> {
    const { name, email }: IUserDTO = req.body;
    await this.useCase.execute({ name, email });
    return reply.status(201).send({message: 'registro de user successfuly!'});
  }
};

export { RegisterUserController };