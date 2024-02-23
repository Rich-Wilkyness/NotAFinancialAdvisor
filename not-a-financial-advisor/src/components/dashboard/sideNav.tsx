import Link from 'next/link';
import NavLinks from '@/components/dashboard/nav-links';
import Image from 'next/image';
import { redirect } from "next/navigation";
import { signOut } from "@/auth";
import styles from '@/app/dashboard/page.module.css';

export default function SideNav() {
    return (
        <div className={styles.main}>
            <Link
                href="/dashboard"
            >
                <Image
                    src={'/money.jpg'}
                    alt="Money"
                    width={150}
                    height={150}
                ></Image>
            </Link>
            <NavLinks />
            <div className={styles.buttonBottom}>
                <form action={async () => {
                    'use server';
                    // await signOut();
                    redirect('/');
                }}>
                    <button className={styles.button}>Sign Out</button>
                </form>
            </div>
        </div>
    )
}