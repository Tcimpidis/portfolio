"use client"
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { FaBars } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

import styles from './index.module.css'
import { useComponentVisible } from '@/common/hooks/useComponentVisible';

const Header = () => {
  const router = useRouter()
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  
  const resetBarsActivity = () => {
    if(isComponentVisible){
      setIsComponentVisible(!isComponentVisible);
    }
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
    setIsComponentVisible(!isComponentVisible);
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo_container}> 
          <button className={styles.logo} onClick={redirectToHome}>
            <Image alt="header" height={50} src={'/assets/tci_logo.svg'} width={260} />
          </button>
        </div>
        <div className={styles.link_box}>
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
          {isComponentVisible && (
            <div className={styles.bars_menu} ref={ref}>
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