import styles from "../../ui/pages/about/about.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.uppercontainer}>
                <img src="./Our Glass Moments Black.png" alt="" />
            </div>
            <div className={styles.lowercontainer}>
                <div className={styles.words}>
                    We are a collective of passionate freelance creatives, brought together 
                    by our love for storytelling and life's special moments. 
                </div>
                <div className={styles.words}>
                    We believe your wedding day is more than just a celebration; it's a tapestry woven with emotions, laughter, 
                    and love. 
                </div>
                <div className={styles.words}>
                    Let us help make your perfect day one you'll cherish forever.
                </div>
            </div>
        </div>
    )    
}

export default AboutPage