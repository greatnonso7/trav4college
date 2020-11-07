import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head>
        <title>Trav4College</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <Image
                src='/assets/images/logo.svg'
                width={50}
                height={50}
                alt="Logo"
              />
              <span className={styles.text}>Trav4College</span>
            </div>
            <div className={styles.navbar}>
              <ul className={styles.navlist}>
                <li className={styles.navItem}>College Application</li>
                <li className={styles.navItem}>Scholarships</li>
                <li className={styles.navItem}>College Savings</li>
                <li className={styles.navItem}>International Exams</li>
                <li className={styles.navItem}>Educational Partners</li>
              </ul>
            </div>
            <div className={styles.auth}>
              <a className={styles.login}>Login</a>
              <button className={styles.register}>Get Started</button>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#F2F9FF' }}>
          <div className={styles.container} style={{ maxHeight: "150%" }}>
            <div style={{ maxWidth: '50%' }}>
              <h1 style={{ fontSize: 65, marginTop: 200 }}>Your College Journey <br /> starts right here.</h1>
              <p style={{ fontSize: 24, lineHeight: 1.3, fontWeight: 300, color: '#667586' }}>Trav4College offers robust platform that includes rich details <br /> on admissions, student profiles, cost of study, graduate <br /> outcomes and more</p>

              <div style={{ marginTop: 50 }}>
                <button className={styles.signup}>Sign up</button>
                <button className={styles.download}>Download App</button>
              </div>
            </div>
            <div style={{ maxWidth: '50%', margin: 'auto' }}>
              <div style={{ position: 'absolute', top: 150, right: 360 }}>
                <img src="/assets/images/student3.jpg" width="320px" height="600px" />
              </div>
              <div style={{ flexDirection: 'row', position: 'relative', left: 700, bottom: 570, maxWidth: 300 }}>
                <img src="/assets/images/student1.jpg" width="280px" height="280px" style={{ marginBottom: 35 }} />
                <img src="/assets/images/student2.jpg" width="280px" height="280px" />
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
