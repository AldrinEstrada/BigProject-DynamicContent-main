import Head from 'next/head'
import styles from '@/styles/1B.module.css'
import BottomNav from '@/Components/NavBarBottom'
import Link from 'next/link'
import { useContext } from 'react'
import { UserSelectionsContext } from './data'

export default function OneBB() {

  const { updateSelections } = useContext(UserSelectionsContext)

  const handleEmailClick = () => {
    updateSelections('What type of scam are you trying to check?', 'Email')
  }

  const handleTextClick = () => {
    updateSelections('What type of scam are you trying to check?', 'Text')
  }

  const handleCallClick = () => {
    updateSelections('What type of scam are you trying to check?', 'Call')
  }

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
          <div className={styles.container}>
            <h3 className={styles.h3}>What type of scam are you trying to check?</h3>
          </div>
          <div className={styles.buttoncontainer}>
            <Link href="/ProvidedPersonalInfo"><button className={styles.button} onClick={handleEmailClick}><h4>Email</h4></button></Link>
            <Link href="/SeenBefore"><button className={styles.button} onClick={handleTextClick}><h4>Text</h4></button></Link>
            <Link href="/UnfamiliarNumber"><button className={styles.button} onClick={handleCallClick}><h4>Call</h4></button></Link>
          </div>
        </div>
        <BottomNav/>
      </main>
    </>
  )
}

