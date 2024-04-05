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
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
        
      </main>
    </>
  );
}