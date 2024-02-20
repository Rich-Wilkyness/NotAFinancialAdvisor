'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [ 
    { name: 'Home', href: '/dashboard' },
    { name: 'Account', href: '/dashboard/account' },
    { name: 'Expenses', href: '/dashboard/expenses' },
    { name: 'Goals', href: '/dashboard/goals' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                >
                </Link>
            );
        })}
        </>
    )
}