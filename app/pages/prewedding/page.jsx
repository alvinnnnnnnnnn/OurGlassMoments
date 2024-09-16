import styles from "../../ui/pages/prewedding/prewedding.module.css"
import Link from "next/link"

const PreweddingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.galleryGrid}>
                <Link href="/pages/prewedding/damon_georgia" className={styles.galleryItem}>
                    <div className={styles.imageContainer}>
                        <img src="/OurGlassMoments/cover_dg_pws.png" alt="" />
                        <div className={styles.overlay}>
                            <div className={styles.overlayText}>D & G</div>
                        </div>
                    </div>
                </Link>
                <Link href="/pages/prewedding/brian_kimberly" className={styles.galleryItem}>
                    <div className={styles.imageContainer}>
                        <img src="/OurGlassMoments/cover_bk_pws.png" alt="" />
                        <div className={styles.overlay}>
                            <div className={styles.overlayText}>B & K</div>
                        </div>
                    </div>
                </Link>
                <Link href="/pages/prewedding/jonathan_louise" className={styles.galleryItem}>
                    <div className={styles.imageContainer}>
                        <img src="/OurGlassMoments/cover_jl_pws.png" alt="" />
                        <div className={styles.overlay}>
                            <div className={styles.overlayText}>J & L</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PreweddingPage