'use client';

import { useFormState, useFormStatus } from "react-dom";
import { createUserAccount } from "@/lib/data";

const initiaState = {
    message: null,
};

function SignUpButton() {
    const { pending } = useFormStatus()

    return (
        <button type='submit' aria-disabled={pending}>
            Sign Up
        </button>
    )
};

export function SignUpForm() {
    const [state, formAction] = useFormState(createUserAccount,initiaState);

    return (
        <form action={formAction}>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <SignUpButton />
            <p aria-live="polite" role="status">{state?.message}</p>
        </form>
    )
}