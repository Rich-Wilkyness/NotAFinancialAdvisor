import { userSignIn } from '@/lib/data';
import { redirect } from 'next/navigation';
import SignInButton from '@/components/signInForm/signInButton';
import styles from '@/app/sign-in/page.module.css';

export default function SignInForm() { 

  return (
    <form action={async (formData) => {
      'use server';
      console.log(formData);
      const isSignedIn = await userSignIn(formData);
      console.log(isSignedIn);
      if (isSignedIn === true) {
        redirect('/dashboard');
      }
      else {
        redirect('/sign-in');
      }
    }} >
      <div className={styles.form}>
        <h2>
          Log in
        </h2>
          <div className={styles.input}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
          </div>
          <div  className={styles.input}>
              <label htmlFor="password" >Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={8}
              />
          </div>
        <div className={styles.input}>
          <SignInButton></SignInButton>  
        </div>
        </div>
    </form>
  );
}
 