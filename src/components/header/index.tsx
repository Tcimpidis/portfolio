"use client"
import Image from 'next/image';

import styles from './index.module.css'
import { useRouter } from 'next/navigation';
import { envRoute } from '@/envUtility';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa6';
import { useState } from 'react';

const Header = () => {
  const router = useRouter()
  const [isBarsActive, setIsBarsActive] = useState<boolean>(false);
  const resetBarsActivity = () => {
    if(isBarsActive){
      setIsBarsActive(!isBarsActive);
    }
  }
  const redirectToServices = () => {
    resetBarsActivity();
    router.push('/about')
  }

  const redirectToPortfolio = () => {
    resetBarsActivity();
    router.push('/portfolio');
  }

  const redirectToResume = () => {
    resetBarsActivity();
    router.push('/resume');
  }

  const redirectToHome = () => {
    resetBarsActivity();
    router.push('/')
  }
  const handleOnBarsClick = () => {
    setIsBarsActive(!isBarsActive);
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <button className={styles.logo} onClick={redirectToHome}>
            <Image alt="header" height={50} src={`${envRoute}/assets/tci_logo.svg`} width={260} />
          </button>
        </div>
        <div className={styles.link_box}>
          <div>
            <button className={styles.button} onClick={redirectToServices}>About</button>
          </div>
          <div>
            <button className={styles.button} onClick={redirectToPortfolio}>Portfolio</button>
          </div>
          <div>
            <button className={styles.button} onClick={redirectToResume}>Resumé</button>
          </div>
        </div>
        <div className={styles.mobile_link_box}>
          <button className={styles.bars_button} onClick={handleOnBarsClick}>
            <IconContext.Provider value={{className:`${styles.chevron}`}}>
              <FaBars />
            </IconContext.Provider>
          </button>
          {isBarsActive && (
            <div className={styles.bars_menu}>
              <div className={styles.menu_button_container}>
                <button className={styles.menu_button} onClick={redirectToServices}>About</button>
              </div>
              <div className={styles.menu_button_container}>
                <button className={styles.menu_button} onClick={redirectToPortfolio}>Portfolio</button>
              </div>
              <div className={styles.menu_button_container}>
                <button className={styles.menu_button} onClick={redirectToResume}>Resumé</button>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className={styles.shape_bottom} data-negative="false">
        <svg preserveAspectRatio="none" viewBox="0 0 1850 100" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.shape} d="M0,6V0h1850v100L0,0z" />
        </svg>
      </div>
    </div>

  )
}

export default Header;