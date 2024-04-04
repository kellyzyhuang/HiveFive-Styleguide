import Head from "next/head";
import styles from "@/styles/Colors.module.css"
import Header from "@/components/Header";

export default function Colors() {
  return(
    <>
      <Head>
          <title>Colors</title>
          <meta name="description" content="Page for color palette and color accessibility" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        <section>
          <div className={styles.colorPalette}>
            <h2>Colour Palette</h2>
            <div className={styles.white}></div>
            <p>#FFFFFF</p>
            <div className={styles.secondary}></div>
            <p>#FEECAC</p>
            <div className={styles.accent}></div>
            <p>#FFC93D</p>
            <div className={styles.black}></div>
            <p>#000000</p>
          </div>
        </section>
      </main>
    </>
  )
}