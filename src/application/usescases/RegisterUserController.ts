import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { FastifyReply, FastifyRequest } from "fastify";
import { IUserDTO } from "../../domain/entities/User";
import { container } from "tsyringe"; 

class RegisterUserController {
  async handle(req: FastifyRequest<{ Body: IUserDTO }>, reply: FastifyReply): Promise<FastifyReply | undefined> {
    const { name, email }: IUserDTO = req.body;
    
    const registerUserCase = container.resolve(RegisterUserUseCase);
    
    await registerUserCase.execute({ name, email });
    return reply.status(201).send({message: 'registro de user successfuly!'});
  }
};

export { RegisterUserController };