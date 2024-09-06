import { FastifyReply, FastifyRequest } from "fastify";
import { userSchemaZod } from "../../domain/validation/user-schema";

 
async function validateUserSchemaZod (req: FastifyRequest, reply: FastifyReply) {
  const parseData = userSchemaZod.safeParse(req.body);

  if(!parseData.success) {
    return reply.status(400).send({ error: "validation failed", issues: parseData.error.errors });
  };
};

export { validateUserSchemaZod };