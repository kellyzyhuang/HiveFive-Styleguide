import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <img src="/images/Happy Bee.svg" alt="beenard" className={styles.logo} />
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
            </div>
            <p className={styles.copyRight}>© 2024 HiveFive. All rights reserved.</p>
        </footer>
    )
}
