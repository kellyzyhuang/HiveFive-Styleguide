import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Background from "@/components/Background";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>HiveFive Styleguide</title>
        <meta name="description" content="Styleguide for the HiveFive app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
      <h1 className={styles.title}><span className={styles.headingColor}>Welcome to the</span> HiveFive <span className={styles.headingColor}>Style Guide</span></h1>
        <p className={styles.description}>Your guide to the visual and stylistic elements of the HiveFive app.</p>
        <div className={styles.beenardContainer}>
          <img src="/images/Happy Bee.svg" alt="happy beenard" className={styles.beenard}/>
        </div>
        <div className={styles.beenardContainer2}>
          <img src="/images/Happy Bee.svg" alt="happy beenard" className={styles.beenard2}/>
        </div>
        <div className={styles.grid}>
          <Link href="/Logo" className={styles.link}>
            <div className={styles.card}>
              <h3>Logo &rarr;</h3>
              <p>Discover the branding and logo variations used across our app.</p>
            </div>
          </Link>
          <Link href="/Colors" className={styles.link}>
            <div className={styles.card}>
              <h3>Colors &rarr;</h3>
              <p>View the color palette that brings the HiveFive app to life.</p>
            </div>
          </Link>
          <Link href="/Typography" className={styles.link}>
            <div className={styles.card}>
              <h3>Typography &rarr;</h3>
              <p>Learn about the typography choices that enhance readability.</p>
            </div>
          </Link>
          <Link href="/Graphics" className={styles.link}>
            <div className={styles.card}>
              <h3>Graphics &rarr;</h3>
              <p>Explore graphics and imagery that define the visual tone of our app.</p>
            </div>
          </Link>
        </div>
      </main>
      <Background/>
      <Footer/>
    </>
  );
}
