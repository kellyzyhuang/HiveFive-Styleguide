import Head from "next/head";
import styles from "@/styles/Graphics.module.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

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
          <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
          <p className={styles.description}>The graphics are minimalist images that use lighter colours and at idealy least one of the colours from our palatte. They are clean, cheerful, and inclusive. Each graphic has a circle as the backdrop. This contributes to the cohesiveness of the graphics even when they stray from the color scheme. Grapics are to be used as the covers for different sections of the app, for example: articles, trivia, or Money Donated</p>
          <div className={styles.graphicImgs}>
            <img src="/images/Beekeeper.svg" className={styles.graphicExample}/>
            <img src="/images/donate.svg" className={styles.graphicExample}/>
            <img src="/images/Trivia.svg" className={styles.graphicExample}/>
          </div>


        </div>
        <div className={styles.iconography}>
          <h2>001 Iconography</h2>
          <div className={styles.linesContainer}><hr className={styles.lines2}></hr><hr className={styles.lines2}></hr></div>
          <p className={styles.description}>The Icons are clean and recognizable, each with a stroke that is 2px and black. The design of the icons is rounded and minimalist to make them approachable. Nearly all icons found in the app will be on top of our primary color: #FEECAC. Each icon will have its name listed beneath it to maximize accessibility</p>
          <div className={styles.iconImgs}>
            <img src="/images/hamburger.svg" className={styles.iconExample}/>
            <img src="/images/home.svg" className={styles.iconExample}/>
            <img src="/images/Quiz-icon.svg" className={styles.iconExample}/>
            <img src="/images/Settings.svg" className={styles.iconExample}/>
            <img src="/images/Activity.svg" className={styles.iconExample}/>
          </div>
          <img src="/images/Spacing.svg" className={styles.spacing}/>
        </div>
        <div className={styles.mascot}>
          <h2>002 Mascot</h2>
          <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
          <p className={styles.description}>This is our mascot, Beenard! he helps the user through the tutorial at the beginning, teaches them about bees, and keeps the user company! In our minigame, the user must help Beenard find his way back home.</p>
          <div className={styles.mascotImgs}>
            <img src="/images/beenard.png" className={styles.beenardExample}/>
            <img src="/images/beenard-sad.png" className={styles.beenardExample}/>
            <img src="/images/beenard-excited.png" className={styles.beenardExample}/>
          </div>
        </div>
        <div className={styles.buttons}>
          <h2>003 Buttons</h2>
          <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
          <p className={styles.description}>Buttons will not have different states since this is a mobile app. All buttons (with the exception of some chips and secondary buttons)  will utilize the accent colour: #FFC93D.</p>
          <div className={styles.buttonExamples}>
            <button className={`${styles.button} ${styles.start}`}>Start Buzzin'</button>
            <button className={`${styles.button} ${styles.rewards}`}>Rewards</button>
            <button className={`${styles.button} ${styles.startLearning}`}>Start Learning</button>
            <button className={`${styles.button} ${styles.chip}`}>Chip</button>
            <button className={styles.mic}><img src="/images/mic.svg" className={styles.micImg}/></button>
          </div>
        </div>
        <div className={styles.images}>
          <h2>004 Imagery</h2>
          <div className={styles.linesContainer}><hr className={styles.lines}></hr><hr className={styles.lines}></hr></div>
          <p className={styles.description}>Our imagery will include various photos of bees, beekeepers, and environments. These images will serve as coverphotos for articles and quiz questions. All photos must be high quality and not appear pixelated</p>
          <div className={styles.beeImgs}>
            <img src="/images/bee-image.jpg" className={styles.beeProfile}/>
            <img src="/images/bee-image3.jpg" className={styles.beeProfile}/>
            <img src="/images/bee-image2.jpg" className={styles.beeLandscape}/>
          </div>
          <div className={styles.article}>
            <div className={styles.overlay}></div>
            <img src="/images/bee-image2.jpg" className={styles.coverPhoto} alt="Cover"></img>
            <div className={styles.date}>Date</div>
            <div className={styles.title}><p>Article Title</p></div>
          </div>
          <div className={styles.article}>
            <div className={styles.overlay}></div>
            <img src="/images/bee-image3.jpg" className={styles.coverPhoto} alt="Cover"></img>
            <div className={styles.date}>Date</div>
            <div className={styles.title}><p>Article Title</p></div>
          </div>
          <div className={styles.article}>
            <div className={styles.overlay}></div>
            <img src="/images/bee-image.jpg" className={styles.coverPhoto} alt="Cover"></img>
            <div className={styles.date}>Date</div>
            <div className={styles.title}><p>Article Title</p></div>
          </div>
          <img src="/images/Quiz.png" className={styles.quiz}/>
          <img src="/images/articles.png" className={styles.quiz}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}