import styles from "./Header.module.css";
import Link from "react";
import Image from "next/image";

export default function Header(){
    return(
        <div className={styles.Header}>
            <Image className={styles.logo}/>
            <div className={styles.menuListContainer}>
                <ul className={styles.menuList}>
                    <li className={styles.list}>Logo</li>
                    <li className={styles.list}>Colours</li>
                    <li className={styles.list}>Typography</li>
                    <li className={styles.list}>Graphics</li>
                </ul>
            </div>
        </div>
    )
}