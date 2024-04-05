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
        <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lexend:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        <section className={styles.Typography}>
            <div>
                <h2>Our Font</h2>
                <p>We are using the font Lexend for this app.</p>
            </div>
            <div>
                <div>
                    <h2>Lexend</h2>
                    <p>Styles</p>
                    <ul>
                        <li>italic</li>
                        <li>Light</li>
                        <li>Regular</li>
                        <li>Medium</li>
                        <li>Bold</li>
                    </ul>
                    <h2>Dela Gothic One</h2>
                    <p>Styles</p>
                    <ul>
                        <li>Regular</li>
                    </ul>
                </div>
                <div>
                    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p>abcdefghijklmnopqrstuvwxyz</p>
                    <p>1234567890</p>
                </div>
                <div>
                    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p>abcdefghijklmnopqrstuvwxyz</p>
                    <p>1234567890</p>                    
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