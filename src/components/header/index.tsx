"use client"
import Image from 'next/image';

import styles from './index.module.css'
import { useRouter } from 'next/navigation';
import { envRoute } from '@/envUtility';

const Header = () => {
  const router = useRouter()
  const redirectToServices = () => {

  }

  const redirectToPeople = () => {
    router.push('/people')
  }

  const redirectToProfile = () => {

  }

  const redirectToHome = () => [
    router.push('/')
  ]
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <button className={styles.logo} onClick={redirectToHome}>
            <Image alt="header" height={50} src={`${envRoute}/assets/tci_logo.svg`} width={260} />
          </button>
        </div>
        <div className={styles['link-box']}>
          <div>
            <button className={styles.button} onClick={redirectToServices}>Services</button>
          </div>
          <div>
            <button className={styles.button} onClick={redirectToPeople}>People</button>
          </div>
          <div>
            <button className={styles.button} onClick={redirectToProfile}>About me</button>
          </div>
        </div>
      </header>
      <div className={styles['shape-bottom']} data-negative="false">
        <svg preserveAspectRatio="none" viewBox="0 0 1850 100" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.shape} d="M0,6V0h1850v100L0,0z" />
        </svg>
      </div>
    </div>

  )
}

export default Header;