import SignUpForm from "@/components/signUpForm/SignUpForm"
import { Metadata } from 'next';
import styles from './page.module.css';
import Image from 'next/image';

export const meta: Metadata = {
    title: 'Create User',
    description: 'Create an account.',
}


export default async function SignUpPage() {
    return (
        <main >
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
                <SignUpForm></SignUpForm>    
            </div>
        </main>
    )
}