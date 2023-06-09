import Head from 'next/head'
import styles from '@/styles/2D.module.css'
import BottomNav from '@/Components/NavBarBottom'

export default function TwoD() {
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
            <h1 className={styles.h3}>What to do if scammed?</h1>
            <div className={styles.scrollbar}>
                <h2 className={styles.h3}>Collect Your Thoughts</h2>
                <h3>
                    Stay calm. Gather all information about the scam, including:
                    <ul>
                        <li>documents</li>
                        <li>receipts</li>
                        <li>copies of emails and/or text messages</li>
                    </ul>
                </h3>
                <h2 className={styles.h3}>
                    Contact your financial institutions
                </h2>

                <h3>
                    Report the incident to the financial institution that transferred the money. If you're a victim of identity fraud:
                    <ul>
                        <li>place flags on all of your accounts</li>
                        <li>change all of your passwords</li>
                        <li>report the scam</li>
                    </ul>
                </h3>

                <h2 className={styles.h3}>
                    Contact the Police
                </h2>
                
                <h3>Report the incident to your local police and get a file number for future reference. If you find suspicious activity on your credit report, update your file with the police.</h3>

                <h2 className={styles.h3}>
                    Report the incident
                </h2>
                
                <h3>Contact the Canadian Anti-Fraud Centre toll free at 1-888-495-8501 or through the Fraud Reporting System. Depending on the type of fraud, or how it occurred, you'll also want to report it to other organizations.</h3>

                <h2 className={styles.h3}>
                    Protect yourself from future fraud
                </h2>
                
                <h3>Scammers often target victims of fraud a second or third time with the promise of recovering money. Always do your due diligence and never send recovery money. Share any updates with the Canadian Anti-Fraud Centre, your financial institutions and police. Tell family, friends, neighbours and co-workers about your experience. You may prevent someone else from becoming a victim.</h3>
            </div>
        </div>
               <BottomNav/>
      </main>
    </>
  )
}

