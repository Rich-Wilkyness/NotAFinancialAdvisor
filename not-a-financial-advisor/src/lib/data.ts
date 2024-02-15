import { unstable_noStore as noStore } from "next/cache";
import { prisma } from './serverPrismaData';

export async function createUserAccount(email: string, password: string) {
    const user = await prisma.user.create({
        data: {
            email,
            password,
        },
    });
    return user;
}