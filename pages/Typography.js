import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Typography.module.css";
import Header from "@/components/Header";

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
                <p>We are using the fonts Lexend for the body copy, and Besley for headings in the app. Lexend, a sans-serif font, is made to be easily readable for users. This font is chosen for the app, because we want all users to comfortably be able to read all the content in our app. Besley, a serif font, has a variety of style. The styles for this font will help give flavour to our app.</p>
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
                        <li className={styles.reg}>Medium</li>
                        <li className={styles.reg}>Semi-Bold</li>
                        <li className={styles.reg}>Bold</li>
                        <li className={styles.reg}>Black</li>
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
            <div>
                <h2>Headings</h2>
                <h2>Body Copy</h2>
                <h2>Others</h2>
            </div>
        </section>
      </main>
    </>
  );
}