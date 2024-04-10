import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.logo}>
                <a href="/"><img src="/images/Happy Bee.svg" alt="beenard" className={styles.logoImage}/></a>
                <p className={styles.logoName}>HiveFive</p>
            </div>
            <div className={styles.menuListContainer}>
                <ul className={styles.menuList}>
                    <li className={styles.list}><Link href="/Logo" className={styles.link}>Logo</Link></li>
                    <li className={styles.list}><Link href="/Colors" className={styles.link}>Colours</Link></li>
                    <li className={styles.list}><Link href="/Typography" className={styles.link}>Typography</Link></li>
                    <li className={styles.list}><Link href="/Graphics" className={styles.link}>Graphics</Link></li>
                    <li className={styles.list}><Link href="/References" className={styles.link}>References</Link></li>
                </ul>
            </div>
        </div>
    )
}