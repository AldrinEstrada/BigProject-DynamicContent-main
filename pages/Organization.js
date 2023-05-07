import Head from 'next/head'
import styles from '@/styles/1K.module.css'
import BottomNav from '@/Components/NavBarBottom'
import Link from 'next/link'
import { useContext } from 'react'
import { UserSelectionsContext } from './data'

var yes = process.env.NEXT_PUBLIC_YES;
var no = process.env.NEXT_PUBLIC_NO;


export default function OneK() {

  const { updateSelections } = useContext(UserSelectionsContext)

  const handleNoClick = () => {
    updateSelections('Is this message from a person or an organization you have seen or used before?', 'No')
  }

  const handleYesClick = () => {
    updateSelections('Is this message from a person or an organization you have seen or used before?', 'Yes')
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
            <h3 className={styles.h3}>
              Is this message from a person or an organization you have seen or used before?
            </h3>
          </div>
          <div className={styles.buttoncontainer}>
            <Link href="/OfficialOrg"><button className={styles.button} onClick={handleYesClick}><h4>{yes}</h4></button></Link>
            <Link href="/GotScammed"><button className={styles.button} onClick={handleNoClick}><h4>{no}</h4></button></Link> 
          </div>
        </div>
          <BottomNav/>
      </main>
    </>
  )
}

