import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Typography.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

export default function Typography() {
  return (
    <>
      <Head>
        <title>Typography</title>
        <meta name="description" content="Page for typography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400..900;1,400..900&family=Lexend:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        <section className={styles.Typography}>
            <div className={styles.intro}>
                <h2>Our Fonts</h2>
                <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
                <p>We are using the fonts Lexend for the body copy, and Besley for headings in the app. Lexend, a sans-serif font, is made to be easily readable for users. This font is chosen for the app, because we want all users to comfortably be able to read all the content in our app. Besley, a serif font, has a variety of style. The styles for this font will help give a timeless feel for our app. Both of these fonts support languages from all continents.</p>
            </div>
            <div className={styles.fontFamily}>
                <div className={styles.fontStyles}>
                    <h2 className={styles.lexend}>Lexend</h2>
                    <p>Styles</p>
                    <ul className={styles.styleListLexend}>
                        <li className={styles.italic}>italic</li>
                        <li className={styles.light}>Light</li>
                        <li className={styles.reg}>Regular</li>
                        <li className={styles.med}>Medium</li>
                        <li className={styles.bold}>Bold</li>
                    </ul>
                    <h2 className={styles.besley}>Besley</h2>
                    <p>Styles</p>
                    <ul className={styles.styleListBesley}>
                        <li className={styles.reg}>Regular</li>
                        <li className={styles.med}>Medium</li>
                        <li className={styles.semi}>Semi-Bold</li>
                        <li className={styles.bold}>Bold</li>
                        <li className={styles.black}>Black</li>
                    </ul>
                </div>
                <div className={styles.exampleFonts}>
                    <div className={styles.fontLexend}>
                        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p>abcdefghijklmnopqrstuvwxyz</p>
                        <p>1234567890</p>
                    </div>
                    <div className={styles.fontBesley}>
                        <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p>abcdefghijklmnopqrstuvwxyz</p>
                        <p>1234567890</p>                    
                    </div>
                </div>
            </div>
              <div className={styles.headingsContainer}>
                <h2 className={styles.headingsHeading}>001 Headings</h2>
                <div className={styles.linesContainer}><hr className={styles.lines2}></hr><hr className={styles.lines3}></hr></div>
                <div className={styles.headings}>
                  <div className={styles.headingExamples}>
                    <h4 className={styles.headOne}>Heading 1</h4>
                    <p className={styles.headOne}>40px</p>
                    <h4 className={styles.headTwo}>Heading 2</h4>
                    <p className={styles.headTwo}>34px</p>
                    <h4 className={styles.headThree}>Heading 3</h4>
                    <p className={styles.headThree}>28px</p>
                    <h4 className={styles.headFour}>Heading 4</h4>
                    <p className={styles.headFour}>22px</p>
                    <h4 className={styles.bodyCopy}>Body Copy</h4>
                    <p className={styles.bodyCopy}>16px</p>
                  </div>
                  <div className={styles.headingSentences}>
                    <p className={styles.headOne}>This is Heading One.</p>
                    <p className={styles.headTwo}>This is Heading Two.</p>
                    <p className={styles.headThree}>This is Heading Three.</p>
                    <p className={styles.headFour}>This is Heading Four.</p>
                    <p className={styles.bodyCopy}>This is Body Copy.</p>
                  </div>
                  <img src="/images/fontregular.svg" className={styles.fontregular}></img>
                  <img src="/images/fontbold.svg" className={styles.fontbold}></img>
                </div>
              </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}