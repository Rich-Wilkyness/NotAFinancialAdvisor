'use client';

import styles from '@/app/sign-in/page.module.css';
import { useFormStatus } from 'react-dom';

export default function SignInButton() {
    const { pending } = useFormStatus();
    return (
        <button type='submit' aria-disabled={pending} className={styles.button}>
            Sign In
        </button>
    );
}