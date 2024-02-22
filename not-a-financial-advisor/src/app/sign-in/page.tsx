import SignInForm from "@/components/signInForm/sign-in-form";
import { Metadata } from 'next';

export const meta: Metadata = {
    title: 'Sign In',
    description: 'Sign in to your account.',
}

export default async function SignInPage() {
    return (
        <main>
            <div>
                <SignInForm></SignInForm>
            </div>
        </main>
    )
}