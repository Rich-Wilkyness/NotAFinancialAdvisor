import Link from 'next/link';


export default function ExpensesNav(expenseType: string) {
    const links = [
        { name: 'Housing', href: `/dashboard/expenses/housing`, type: 'housing' },
        { name: 'Car', href: `/dashboard/expenses/automobile`, type: 'automobile'},
        { name: 'Health', href: `/dashboard/expenses/health`, type: 'health' },
        { name: 'Services', href: `/dashboard/expenses/services`, type: 'services' },
        { name: 'Loans', href: `/dashboard/expenses/loans`, type: 'loans' },
        { name: 'Misc', href: `/dashboard/expenses/misc`, type: 'misc' },
    ];
    return (
        <div>
        {links.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={expenseType === link.type ? 'active' : ''}
                >
                    <p>{link.name}</p>
                </Link>
            );
        })}
        </div>
    )
}