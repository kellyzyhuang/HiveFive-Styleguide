import styles from "./Header/module.css";
import Link from "react";

export default function Header(){
    return(
        <div className={styles.Header}>
            <Image className={styles.logo}/>
            <div className={styles.menuList}>
                <ul>
                    <li>Colours</li>
                    <li>Graphics</li>
                </ul>
            </div>
        </div>
    )
}