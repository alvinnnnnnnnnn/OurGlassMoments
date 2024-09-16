import styles from "../../ui/pages/rates/rates.module.css";
import Image from "next/image";

const RatesPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard1}
                        src="/OurGlassMoments/rate card.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard2}
                        src="/OurGlassMoments/PW.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard3}
                        src="/OurGlassMoments/PW rate.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard4}
                        src="/OurGlassMoments/AD.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard5}
                        src="/OurGlassMoments/AD rate.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard6}
                        src="/OurGlassMoments/solemnisation.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard7}
                        src="/OurGlassMoments/solemnisation rate.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
            </div>
        </div>
    );
};

export default RatesPage;
