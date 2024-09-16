"use client";
import styles from "../ui/pages/pages.module.css";
import Header from "../ui/pages/header/header";
import Footer from "../ui/pages/footer/footer";
import { usePathname } from "next/navigation"; 
import Image from "next/image";
import { useEffect, useState } from "react";

const LayOut = ({children}) => {
    const pathname = usePathname();  
    const [imageSrc, setImageSrc] = useState('');

    // Dynamically set the image source based on the current route
    useEffect(() => {
        const getImageSrc = () => {
            const basePath = '/OurGlassMoments';  // Your GitHub repo name
            switch (pathname) {
                case '/pages':
                    return `${basePath}/cover_page.png`;  
                case '/pages/about':
                    return `${basePath}/cover_about.png`;  
                case '/pages/rates':
                    return `${basePath}/cover_rates.png`; 
                case '/pages/prewedding':
                    return `${basePath}/cover_pws.png`; 
                case '/pages/wedding':
                    return `${basePath}/cover_wed.png`; 
                case '/pages/contact':
                    return `${basePath}/cover_contact.png`; 
                default:
                    return ''; 
            }
        };        

        setImageSrc(getImageSrc());
    }, [pathname]);  

    return (
        <div className={styles.container}>
            <div className={styles.uppercontainer}>
                {imageSrc && (
                    <Image 
                        src={imageSrc}
                        alt="Background Image"
                        layout="fill" 
                        objectFit="cover"  
                        priority={true}  
                    />
                )}
                <Header />
            </div>
            <div className={styles.body}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default LayOut;




