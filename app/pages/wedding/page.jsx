import styles from "../../ui/pages/wedding/wedding.module.css"
import Link from "next/link"

const WeddingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.galleryGrid}>
                <Link href="/pages/wedding/sean_carrisa" className={styles.galleryItem}>
                    <div className={styles.imageContainer}>
                        <img src="./cover_sc_ad.png" alt="" />
                        <div className={styles.overlay}>
                            <div className={styles.overlayText}>S & C</div>
                        </div>
                    </div>
                </Link>
                <Link href="" className={styles.galleryItem}>
                    <div className={styles.imageContainer}>
                        <img src="./cover_dg_pws.png" alt="" />
                        <div className={styles.overlay}>
                            <div className={styles.overlayText}>D & G</div>
                        </div>
                    </div>
                </Link>
                <Link href="" className={styles.galleryItem}>
                    <div className={styles.imageContainer}>
                        <img src="./cover_blqr_ad.png" alt="" />
                        <div className={styles.overlay}>
                            <div className={styles.overlayText}>BR & QL</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WeddingPage
