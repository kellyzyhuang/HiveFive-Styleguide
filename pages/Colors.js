import Head from "next/head";
import styles from "@/styles/Colors.module.css"
import Header from "@/components/Header";
import Image from "next/image";

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
        <section className={styles.colors}>
          <h2 className={styles.heading}>About</h2>
          <p>HiveFive's colours represents the bees.</p>
          <div className={styles.colorPalette}>
            <h2 className={styles.heading}>Palette</h2>
            <div className={styles.palette}>
              <div className={styles.whiteContainer}>
                <div className={styles.white}></div>
                <h3>#FFFFFF</h3>
                <p>White</p>
              </div>
              <div className={styles.secondaryContainer}>
                <div className={styles.secondary}></div>
                <h3>#FEECAC</h3>
                <p>Vanilla</p>     
              </div>
              <div className={styles.accentContainer}>            
                <div className={styles.accent}></div>
                <h3>#FFC93D</h3>
                <p>Sunglow</p>
              </div>
              <div className={styles.blackContainer}>
                <div className={styles.black}></div>
                <h3>#000000</h3>
                <p>Black</p>
              </div>              
            </div>
          </div>
          <div className={styles.accessibilityContainer}>
            <h2 className={styles.heading}>Colour Accessibility</h2>
            <p>Our colour contrast is tested by both a figma plugin, and from the website Coolors.</p>
            <div className={styles.contrastResults}>
              <Image src={"/images/17.81rate.png"} width={475} height={175} alt="screenshot of color contrast result 17.81"/>
              <Image src={"/images/13.67rate.png"} width={475} height={175} alt="screenshot of color contrast result 13.67"/>
              <Image src={"/images/10rate.png"} width={475} height={175} alt="screenshot of color contrast result 10"/>
              <Image src={"/images/6.07rate.png"} width={475} height={175} alt="screenshot of color contrast result 6.07"/>
            </div>
          </div>
          <div className={styles.examplesContainer}>
            <h2 className={styles.heading}>Examples</h2>
          </div>
        </section>
      </main>
    </>
  )
}