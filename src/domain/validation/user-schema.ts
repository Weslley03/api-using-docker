import { z } from 'zod';

const userSchemaZod = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("invalid email format"),
});

export { userSchemaZod };