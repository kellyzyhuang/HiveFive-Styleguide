import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <div className={styles.Header}>
            <div className={styles.logo}>
                <Image className={styles.logoPhoto} src={"hivefive_logo.svg"} width={60} height={60}/>
                <p className={styles.logoName}>HiveFive</p>
            </div>
            <div className={styles.menuListContainer}>
                <ul className={styles.menuList}>
                    <li className={styles.list}><Link href="/">Logo</Link></li>
                    <li className={styles.list}><Link href="/Colors">Colours</Link></li>
                    <li className={styles.list}><Link href="/Typography">Typography</Link></li>
                    <li className={styles.list}><Link href="/Graphics">Graphics</Link></li>
                    <li className={styles.list}><Link href="/References">References</Link></li>
                </ul>
            </div>
        </div>
    )
}