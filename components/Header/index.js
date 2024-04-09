import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.logo}>
                <p className={styles.logoName}>HiveFive</p>
            </div>
            <div className={styles.menuListContainer}>
                <ul className={styles.menuList}>
                    <li className={styles.list}><Link href="/Logo">Logo</Link></li>
                    <li className={styles.list}><Link href="/Colors">Colours</Link></li>
                    <li className={styles.list}><Link href="/Typography">Typography</Link></li>
                    <li className={styles.list}><Link href="/Graphics">Graphics</Link></li>
                    <li className={styles.list}><Link href="/References">References</Link></li>
                </ul>
            </div>
        </div>
    )
}