import styles from "../../ui/pages/rates/rates.module.css";
import Image from "next/image";

const RatesPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard1}
                        src="./rate card.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard2}
                        src="./PW.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard3}
                        src="./PW rate.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard4}
                        src="./AD.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard5}
                        src="./AD rate.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard6}
                        src="./solemnisation.png"
                        alt=""
                        layout="responsive"
                        width={170}
                        height={40}
                    />
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.ratecard7}
                        src="./solemnisation rate.png"
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
