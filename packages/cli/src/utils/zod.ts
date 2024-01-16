import { z } from 'zod'

export const rawConfig = z
  .object({
    tsx: z.boolean(),
    rsc: z.boolean(),
    aliases: z.object({
      compontents: z.string(),
      utils: z.string()
    })
  })
  .strict()
