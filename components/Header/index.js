import styles from "./Header.module.css";
import Link from "react";
import Image from "next/image";

export default function Header(){
    return(
        <div className={styles.Header}>
            <Image className={styles.logo}/>
            <div className={styles.menuList}>
                <ul>
                    <li>Logo</li>
                    <li>Colours</li>
                    <li>Typography</li>
                    <li>Graphics</li>
                </ul>
            </div>
        </div>
    )
}