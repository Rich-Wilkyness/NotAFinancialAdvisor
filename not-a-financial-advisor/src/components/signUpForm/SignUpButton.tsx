'use client';

import { useFormStatus } from 'react-dom';

export function SignUpButton() {
    const { pending } = useFormStatus();
    return (
        <button type='submit' aria-disabled={pending}>
            Sign Up
        </button>
    )
};