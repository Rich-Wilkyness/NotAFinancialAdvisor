import { createUserAccount } from "@/lib/data";
import { SignUpButton } from './SignUpButton'
import { z } from 'zod';

const initialState = {
    message: '',
};

export default function SignUpForm() {
    async function validateUserAccount(formData: FormData) {
        'use server'
        const schema = z.object({
            email: z.string().email(),
            password: z.string().min(8),
        });
        const validatedFields = schema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });
        initialState.message = await createUserAccount(validatedFields);

    return (
        <form action={validateUserAccount}>
            <input type='text' placeholder='Email' name="email" />
            <input type='password' placeholder='Password' name="password"/>
            <SignUpButton />
        </form>
    )}
}