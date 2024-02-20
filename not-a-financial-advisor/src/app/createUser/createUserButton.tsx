'use client';

import { useFormStatus } from 'react-dom';

export function CreateUserButton() {
    const { pending } = useFormStatus();
    return (
        <button type='submit' aria-disabled={pending}>
            Create Account
        </button>
    )
};