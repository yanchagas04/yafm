import { User, UserData } from "@/schemas/user";
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { hashPassword } from '@/utils/user/pass'

export class UserService {

    static async createUser(userData: UserData): Promise<User | null> {
        const cookieStore = await cookies()
        const supabase = createClient(cookieStore)

        userData.password = await hashPassword(userData.password)

        const { data, error } = await supabase
            .from('users')
            .insert(userData)
            .select()

        if (error) {
            console.error("Erro = ", error)
            return null
        } else {
            console.log("User = ", data)
            return data.at(0)
        }
    }
}

