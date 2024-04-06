import Head from "next/head";
import styles from "@/styles/Graphics.module.css"
import Header from "@/components/Header";

export default function Graphics() {
  return(
    <>
      <Head>
          <title>Graphics, Typography, and Imagery</title>
          <meta name="description" content="Page for graphics, typography, imagery, etc." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        <div className={styles.graphics}>
          <h2>Graphics</h2>
          <div className={styles.graphicImgs}>
            <img src="/images/Beekeeper.svg" className={styles.graphicExample}/>
            <img src="/images/donate.svg" className={styles.graphicExample}/>
            <img src="/images/Trivia.svg" className={styles.graphicExample}/>
          </div>
          <p className={styles.description}>The graphics are minimalist images that use pastel colours and at lease one of the colours from our palatte. They are clean, cheerful, and inclusive. Each graphic has a circle as the backdrop. This contributes to the cohesiveness of the graphics even when they stray from the color scheme</p>
        </div>
        <div className={styles.iconography}>
          <h2>Iconography</h2>
          <div className={styles.iconImgs}>
            <img src="/images/HamburgerIcon.svg" className={styles.iconExample}/>
          </div>
          
        </div>
      </main>
    </>
  )
}