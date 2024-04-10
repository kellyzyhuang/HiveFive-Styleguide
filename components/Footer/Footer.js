import styles from "./Footer.module.css";
import Link from 'next/link'; 

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <a href="/"><img src="/images/Happy Bee.svg" alt="beenard" className={styles.logo} /></a>
                <h2>HiveFive</h2>
                <p>Help save the bees.</p>
            </div>
            <div className={styles.categorySection}>
                <div className={styles.category}>
                    <h3>Team</h3>
                    <ul>
                        <li>Arabella Alegria</li>
                        <li>Kelly Huang</li>
                        <li>Melissa Jacobi</li>
                    </ul>
                </div>
                <div className={styles.category}>
                    <h3>Course</h3>
                    <p className={styles.course}>MDIA2106</p>
                    <p>D3 - Set G</p>
                </div>
                <div className={styles.category}>
                    <h3>Pages</h3>
                    <p><Link href="/Logo" className={styles.footerLink}>Logo</Link></p>
                    <p><Link href="/Colors" className={styles.footerLink}>Colours</Link></p>
                    <p><Link href="/Typography" className={styles.footerLink}>Typography</Link></p>
                    <p><Link href="/Graphics" className={styles.footerLink}>Graphics</Link></p>
                </div>
            </div>
            <p className={styles.copyright}>© HiveFive 2024. All Rights Reserved.</p>
        </footer>
    )
}
