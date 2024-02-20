import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function LoginPage() {
    // const session = await getSession();
    return (
        <form action={async (formData) => {
            'use server';
            await signIn(formData);
            redirect('/dashboard');
        }}>
            <label htmlFor="email"></label>
            <input type='text' placeholder='Email' name="email" id="email" />

            <label htmlFor="password"></label>
            <input type='password' placeholder='Password' name="password" id="password"/>

            <button type='submit'>Login</button>

            <div>
                <p>No account? 
                    <Link
                        href={'/createUser'}
                    >
                        Sign up!
                    </Link>
                </p>
            </div>

        </form>
    )
}