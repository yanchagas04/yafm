"use server"

import { UserService } from "@/services/user/user"
import { UserDataSchema } from "@/schemas/user"

export async function registerAction(formData: {
    name: string
    email: string
    password: string
    birthday: string
}): Promise<{ success: boolean; error?: string }> {
    const parsed = UserDataSchema.safeParse({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        birthday: formData.birthday,
    })

    if (!parsed.success) {
        const firstError = parsed.error?.message ?? "Dados inválidos."
        return { success: false, error: firstError }
    }

    const user = await UserService.createUser(parsed.data)

    if (!user) {
        return { success: false, error: "Não foi possível criar a conta. Verifique se o e-mail já está em uso." }
    }

    return { success: true }
}
