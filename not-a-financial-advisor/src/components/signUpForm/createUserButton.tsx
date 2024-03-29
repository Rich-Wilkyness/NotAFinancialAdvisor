'use client';

import styles from '@/app/create-user/page.module.css';
import { useFormStatus } from 'react-dom';


export function CreateUserButton() {
    const { pending } = useFormStatus();

    return (
        <button type='submit' aria-disabled={pending} className={styles.button}>
            Create Account
        </button>
    )
};