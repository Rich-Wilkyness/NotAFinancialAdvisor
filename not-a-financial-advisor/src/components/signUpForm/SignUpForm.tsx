import { createUserAccount } from "@/lib/data";
import { CreateUserButton } from "./createUserButton";
import { redirect } from "next/navigation";
import styles from '@/app/create-user/page.module.css';

export default function SignUpForm() {

    return ( 
    <form action={async (formData) => {
        'use server';
        console.log(formData);
        const isCreated = await createUserAccount(formData);
        if (isCreated === true) {
            redirect('/sign-in');
        }
        else {
            redirect('/create-user');
        }
    }}>
        <div className={styles.form}>
            <h2>
                Create Account
            </h2>
            <div className={styles.input}>
                <label htmlFor="email">Email: </label>
                <input type='text' placeholder='Email' name="email" />
            </div>
            <div className={styles.input}>
                <label htmlFor="password">Password: </label>
                <input type='password' placeholder='Password' name="password"/>
            </div>
            <div className={styles.input}>
                <CreateUserButton></CreateUserButton>
            </div>
        </div>
        
    </form>
    );
}