import Head from "next/head";
import styles from "@/styles/Colors.module.css"
import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

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
          <h2 className={styles.heading}>Our Colours</h2>
          <p className={styles.bodyCopy}>HiveFive's colours represents the bees. Our team want the palette to be connected with the bees, as that is our theme for this app. Yellow represents joy, which is what our team want the users to feel whenever they use our app. Alongside joy, yellow also represents optimism and hope. As the purpose of this app is to give notice and attention to the current situation of the bees in today's society, our team hopes that the users can feel optimistic that our bees will thrive in our planet once again.</p>
          <h2 className={styles.heading}>001 Palette</h2>
          <div className={styles.palette}>
            <div className={styles.whiteContainer}>
              <p>#FFFFFF</p>
              <div className={styles.white}></div>
              <p>White</p>
            </div>
            <div className={styles.secondaryContainer}>
              <p>#FEECAC</p>
              <div className={styles.secondary}></div>
              <p>Vanilla</p>     
            </div>
            <div className={styles.accentContainer}>
              <p>#FFC93D</p>             
              <div className={styles.accent}></div>
              <p>Sunglow</p>
            </div>
            <div className={styles.blackContainer}>
              <p>#000000</p>
              <div className={styles.black}></div>
              <p>Black</p>
            </div>              
          </div>
          <h2 className={styles.heading}>002 Colour Accessibility</h2>
          <p className={styles.bodyStyle}>Our colour contrast is tested by both a figma plugin, and from the website Coolors.</p>
          <div className={styles.accessibilityContainer}>
            <div className={styles.contrastResults}>
              <Image src={"/images/17.81rate.png"} width={475} height={175} alt="screenshot of color contrast result 17.81"/>
              <Image src={"/images/13.67rate.png"} width={475} height={175} alt="screenshot of color contrast result 13.67"/>
              <Image src={"/images/10rate.png"} width={475} height={175} alt="screenshot of color contrast result 10"/>
              <Image src={"/images/11.94rate.png"} width={475} height={175} alt="screenshot of color contrast result 11.94"/>
            </div>
          </div>
          <h2 className={styles.heading}>003 Examples</h2>
          <p className={styles.bodyStyle}>Examples of how the colour palette is applied to our app.</p>
          <div className={styles.examplesContainer}>
            <div className={styles.examplePhotos}>
              <Image src={"/images/tutorial_page.png"} width={200} height={420} alt="tutorial page"/>
              <Image src={"/images/learn_more_page.png"} width={200} height={420} alt="learn more page"/>
              <Image src={"/images/quiz_page.png"} width={200} height={420} alt="quiz page"/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}