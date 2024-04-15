import styles from "@/styles/Logo.module.css";
import Header from "@/components/Header";
import Head from "next/head"; 
import Footer from "@/components/Footer/Footer";

export default function Logo() {
  return (
    <>
    <Head>
      <title>Logo</title>
      <meta name="description" content="Page for HiveFive logos" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <main className={`${styles.main}`}>
      <section className={styles.description}>
        <h3 className={styles.descriptionHeading}>Logo</h3>
        <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
        <p className={styles.descriptionParagraph}>The HiveFive logo features a happy honey bee, aligning with the purpose of our app which is to 
          preserve the life of honey bees and the environment around them. We chose Lexend as the font for the 
          wordmark because it is designed to reduce visual stress and reading performance which is good for accessibility. It also has a modern, but friendly appearance
          which is what we hope to convey with our app. 
        </p>
      </section>
      <section className={styles.variations}>
        <h2 className={styles.variationsHeading}>001 Logo Variations</h2>
        <div className={styles.variationsTextContainer}>
          <img src="/images/originalfullcolour.svg" className={styles.full}/>
          <img src="/images/blackandwhite.svg" className={styles.bw}/>
          <img src="/images/monochromatic2.svg" className={styles.mono}/>
          <img src="/images/grayscale2.svg" className={styles.gray}/>
        </div>
        <div className={styles.linesContainer}><hr className={styles.lines2}></hr><hr className={styles.lines2}></hr></div>
        <div className={styles.variationsContainer}>
          <img src="/images/Original.svg" alt="original bernard" className={styles.gridItem}></img>
          <img src="/images/B&W.svg" alt="b&w bernard" className={styles.gridItem}></img>
          <img src="/images/Grayscale.svg" alt="grayscale bernard" className={styles.gridItem}></img>
          <img src="/images/Monochromatic.svg" alt="monochromatic bernard" className={styles.gridItem}></img>
        </div>
      </section>
      <section className={styles.orientation}>
      <h3 className={styles.orientationHeading}>002 Spacing</h3>
      <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
        <div className={styles.orientationContainer}>
          <img src="/images/Logo Spacing.svg" alt="beenard solo spacing" className={styles.spacingItem}></img>
          <img src="/images/Wordmark Spacing.svg" alt="wordmark solo spacing" className={styles.spacingItem}></img>
          <img src="/images/All Spacing.svg" alt="logo stacked spacing" className={styles.spacingItem}></img>
          <img src="/images/All Horizontal Spacing.svg" alt="logo horizontal spacing" className={styles.spacingItem}></img>
        </div>
      </section>
      <section className={styles.favicon}>
        <h3 className={styles.faviconHeading}>003 Favicons</h3>
        <p className={styles.faviconParagraph}>Each favicon has a clear space of 1/4 its length. 16px = 4px, 32px = 8px, 48px = 12px.</p>
        <div className={styles.linesContainer}><hr className={styles.lines3}></hr><hr className={styles.lines3}></hr></div>
        <div className={styles.faviconContainer}>
          <img src="/images/32px.svg" alt="16px beenard favicon" className={styles.favicon16}></img>
          <img src="/images/32px.svg" alt="32px beenard favicon" className={styles.favicon32}></img>
          <img src="/images/32px.svg" alt="48px beenard favicon" className={styles.favicon48}></img>
        </div>
        <div className={styles.faviconLabels}>
          <h4 className={styles.label}>16px</h4>
          <h4 className={styles.label}>32px</h4>
          <h4 className={styles.label}>48px</h4>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}