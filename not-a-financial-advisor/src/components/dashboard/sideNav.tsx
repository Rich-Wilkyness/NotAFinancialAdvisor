import Link from 'next/link';
import NavLinks from '@/components/dashboard/nav-links';
import Image from 'next/image';
import { redirect } from "next/navigation";
import { signOut } from "@/auth";

export default function SideNav() {
    return (
        <div>
            <Link
                href="/dashboard"
            >
                <Image
                    src={'/money.jpg'}
                    alt="Money"
                    width={100}
                    height={100}
                ></Image>
            </Link>
            <NavLinks />
            <div>
                <form action={async () => {
                    'use server';
                    await signOut();
                    redirect('/');
                }}></form>
            </div>
        </div>
    )
}