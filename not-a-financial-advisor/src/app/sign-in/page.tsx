import SignInForm from "@/components/signInForm/sign-in-form";
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const meta: Metadata = {
    title: 'Sign In',
    description: 'Sign in to your account.',
}

export default async function SignInPage() {
    return (
        <main>
            <div className={styles.heading}>
                <Image
                    src={'/money.jpg'}
                    alt="Money"
                    width={100}
                    height={100}
                >
                </Image>
            </div>
            <div className={styles.title}>
                <h1>Definitely Not Financial Advice</h1>
            </div>
            <div className={styles.main}>
                <SignInForm></SignInForm>
                <div>
                    <Link
                        href="/create-user"
                    >No account? Sign Up
                    </Link>
                </div>
            </div>
            
        </main>
    )
}