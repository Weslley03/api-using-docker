import fastify, { FastifyRequest, FastifyReply } from "fastify";
const server = fastify();

server.get('/testing', async (req: FastifyRequest, reply: FastifyReply) => {
  try{
    reply.send({message: 'hello world'});
  }catch(err){
    console.error('não foi possivel acessar essa rota, error: ', err)
    reply.status(404).send({message: 'internal server error'});
  };
});

const PORT = 3000;
server.listen({port: PORT, host: '0.0.0.0'}, (err, addres) => {
  if(err) {
    console.error(err);
    process.exit(1);
  };
  console.log(`server running in ${addres}`);
});
