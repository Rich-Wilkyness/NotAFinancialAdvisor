import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const meta: Metadata = {
    title: 'Welcome to Not a Financial Advisor',
}

export default async function SignInPage() {
    return (
        <main className={styles.main}>
            <div className={styles.border}>
            <div className={styles.div} >
                <Link 
                    className={styles.link}
                    href="/sign-in"
                > Sign In
                </Link>
            </div>
            <div>
                <Link
                    className={styles.link}
                    href="/create-user"
                >No account? Sign Up
                </Link>
            </div>
            </div>
        </main>
    )
}