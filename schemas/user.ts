import z from 'zod'

const userSchema = z.object({
    id: z.number().int().positive(),
    name: z.string(),
    email: z.email({
        error: "E-mail inválido."
    }),
    password: z.string(),
    birthday: z.iso.datetime()
})

type User = z.infer<typeof userSchema>;