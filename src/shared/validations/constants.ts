import { z } from 'zod';

const Schema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string().default('3025'),
});

export default Schema;