import Head from 'next/head'
import styles from '@/styles/2L.module.css'
import BottomNav from '@/Components/NavBarBottom'


export default function TwoL() {
  return (
    <>
      <Head>
        <title>Swindle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Layer_1(3).svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoholder}>
          <div>
            <img src="/LogoHorizontalWhite.svg" className={styles.logo}/>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <h1 className={styles.h3}>Common scams aimed at newcomers to Canada</h1>
          <div className={styles.scrollbar}>
            <h3 className={styles.center}>Canada has a reputation for being one of the most welcoming countries in the world for immigrants. But not everyone here wants to see you succeed.For Canada's current generation of thieves, immigrants — even those who haven't yet arrived in the country — make ideal targets for a variety of online and telephone scams. Hiding behind fake phone numbers, email addresses and identities, criminals may attempt to exploit your lack of knowledge about Canadian customs and laws to draw you into phony scenarios that can have real financial consequences. In 2021, the impact of fraud in Canada totaled $383 million, according to the Canadian Anti-Fraud Centre. But these scams are usually simple and unsophisticated; they are not the work of evil geniuses. Once you know how to identify such scams, you can prevent yourself from becoming a victim.</h3>
          </div>
        </div>
        <BottomNav/>
      </main>
    </>
  )
}

