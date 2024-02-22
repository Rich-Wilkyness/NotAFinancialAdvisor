import { createUserAccount } from "@/lib/data";
import { CreateUserButton } from '@/components/signUpForm/createUserButton';
import { redirect } from "next/navigation";



export default function SignUpForm() {

    return (
        <form action={async (formData) => {
            'use server';
            console.log(formData);
            const isCreated = await createUserAccount(formData);
            if (isCreated === true) {
                redirect('/dashboard');
            }
            else {
                redirect('/create-user');
            }
        }}>
            <label htmlFor="email">Email: </label>
            <input type='text' placeholder='Email' name="email" />
            <label htmlFor="password">Password: </label>
            <input type='password' placeholder='Password' name="password"/>
            <CreateUserButton></CreateUserButton>
        </form>
    )
}