import styles from "../../ui/pages/contact/contact.module.css";

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textbox}>
                <h2>Get in Touch!</h2>
                <p>We’d love to hear from you. Please fill out the form below.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Name (Required)</label>
                    <input className={styles.input} type="text" placeholder="Your Name" name="name" required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email (Required)</label>
                    <input className={styles.input} type="email" placeholder="Your Email" name="email" required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone_number">Phone Number (Required)</label>
                    <input className={styles.input} type="tel" placeholder="Your Phone Number" name="phone_number" required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="photoshoot_date">Photoshoot Date</label>
                    <input className={styles.input} type="date" name="photoshoot_date" />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea className={styles.textarea} placeholder="Your Message" name="message" rows="5"></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>Send</button>
            </form>
        </div>
    )
}

export default ContactPage;
