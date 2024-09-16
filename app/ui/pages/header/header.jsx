import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for Next.js 13+

const Header = () => {
    const pathname = usePathname(); // Get the current pathname

    // Function to check if the route is active
    const isActive = (path) => pathname === path;

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/pages" className={isActive('/') ? styles.active : ''}>
                    <img src="/Our Glass Moments White.png" alt="" />
                </Link>
            </div>
            <div className={styles.pages}>
                <div className={styles.photosPage}>
                    OUR WORK
                    <div className={styles.dropdownContent}>
                        <Link href="/pages/prewedding" className={isActive('/pages/prewedding') ? styles.active : ''}>
                            PREWEDDING
                        </Link>
                        <Link href="/pages/wedding" className={isActive('/pages/wedding') ? styles.active : ''}>
                            ACTUAL DAY
                        </Link>
                    </div>
                </div>
                <div className={styles.ratesPage}>
                    <Link href="/pages/rates" className={isActive('/pages/rates') ? styles.active : ''}>
                        RATES
                    </Link>
                </div>
                <div className={styles.aboutPage}>
                    <Link href="/pages/about" className={isActive('/pages/about') ? styles.active : ''}>
                        ABOUT
                    </Link>
                </div>
                <div className={styles.contactPage}>
                    <Link href="/pages/contact" className={isActive('/pages/contact') ? styles.active : ''}>
                        CONTACT US
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;

