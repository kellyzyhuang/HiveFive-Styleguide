import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import styles from "@/styles/References.module.css";

export default function References() {
  return(
    <>
      <Head>
          <title>References</title>
          <meta name="description" content="Page for references" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>References</h2>
          <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
        </div>
        <div className={styles.references}>
          <ul className={styles.referenceList}>
            <li className={styles.listItem}>Coolors - https://coolors.co/</li>
            <li className={styles.listItem}>Pexels - https://www.pexels.com/</li>
            <li className={styles.listItem}>Behance - https://www.behance.net/</li>
          </ul>
        </div>
      </main>
      <Footer/>
    </>
  )
}