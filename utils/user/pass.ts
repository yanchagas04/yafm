import bcrypt from 'bcrypt'

const salt = 10

async function hashPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, salt)
    return hash
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
}