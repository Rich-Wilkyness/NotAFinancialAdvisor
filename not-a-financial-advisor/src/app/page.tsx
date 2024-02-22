import { Metadata } from 'next';
import Link from 'next/link';

export const meta: Metadata = {
    title: 'Welcome to Not a Financial Advisor',
}

export default async function SignInPage() {
    return (
        <main>
            <div>
                <Link
                    href="/sign-in"
                >Sign In
                </Link>
            </div>
        </main>
    )
}