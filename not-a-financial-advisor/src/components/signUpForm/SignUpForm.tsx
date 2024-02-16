'use client';

import { useState, FormEvent } from "react";
import { createUserAccount } from "@/lib/data";

const initialState = {
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

export default function SignUpForm() {
    const [state, formAction] = useFormState(createUserAccount, initialState);

    return (
        <form action={formAction}>
            <input type='text' placeholder='Email' name="email" />
            <input type='password' placeholder='Password' name="password"/>
            <SignUpButton />
            <p aria-live="polite" role="status">{state?.message}</p>
        </form>
    )
}