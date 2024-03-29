import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { User } from '@/lib/definitions';

const prisma = new PrismaClient();


async function getUserByEmail(email: string): Promise<User | undefined> {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                // income: true,
                expenses: true,
                goals: true,
            },
        });
        if (user) {
            return { ...user, id: String(user.id)};
        }
        return undefined;
    } catch (error) {
        console.log('Error getting user by email: ', error);
        throw new Error('Error getting user by email');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials, request) {
                const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(8) }).safeParse(credentials);
                console.log('1234567890');

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUserByEmail(email);
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (passwordMatch) {
                        return user;
                    }
                }
                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
