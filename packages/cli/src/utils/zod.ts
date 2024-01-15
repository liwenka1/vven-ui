import { z } from 'zod'

export const rawConfig = z.object({ typescript: z.boolean() }).strict()
