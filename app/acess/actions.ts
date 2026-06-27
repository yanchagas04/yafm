"use server"

export async function registerAction(formData: {
    name: string
    email: string
    password: string
    birthday: string
}): Promise<{ success: boolean; error?: string }> {

    return { success: true }
}
