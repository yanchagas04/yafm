import z from 'zod'

export const UserDataSchema = z.object({
    name: z.string(),
    email: z.email({
        error: "E-mail inválido."
    }),
    password: z.string(),
    birthday: z.coerce.date({
        error: "Forneça um data válida.",
    })
})

export const UserSchema = UserDataSchema.extend({
    id: z.number().int().positive()
})

export type User = z.infer<typeof UserSchema>;
export type UserData = z.infer<typeof UserDataSchema>;