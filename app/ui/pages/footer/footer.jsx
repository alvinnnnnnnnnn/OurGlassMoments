import styles from "./footer.module.css"
import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import Link from "next/link"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.instaicon}>
                <Link href="https://www.instagram.com/ourglassmoments?igsh=MTliOW96bmFmMjgxdw==" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram />
                </Link>
            </div>
            <div className={styles.tticon}>
                <Link href="https://www.tiktok.com/@ourglassmoments?_t=8pgLqeUSneK&_r=1" target="_blank" rel="noopener noreferrer">
                    <IoLogoTiktok />
                </Link>
            </div>
            <div className={styles.yticon}>
                <Link href="https://youtube.com/@ourglassmoments?si=0u1b5-rvFssNX3RN" target="_blank" rel="noopener noreferrer">
                    <IoLogoYoutube />
                </Link>
            </div>
        </div>
    );  
}

export default Footer