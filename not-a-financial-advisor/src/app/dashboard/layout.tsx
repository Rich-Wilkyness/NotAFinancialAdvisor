import SideNav from '@/components/dashboard/sideNav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div>
                    <SideNav />
                </div>
                {children}
            </body>
        </html>
    );
}