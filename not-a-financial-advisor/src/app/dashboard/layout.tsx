import SideNav from '@/components/dashboard/sideNav';
import styles from '@/app/dashboard/page.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className={styles.sideNav}>
                    <SideNav />
                </div>
                {children}
            </body>
        </html>
    );
}