import styles from './index.module.css'
import tci_logo from '../assets/tci_logo.png';


const Header = () => {
  const redirectToServices = () => {

  }

  const redirectToExperience = () => {

  }

  const redirectToProfile = () => {

  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={tci_logo} alt="header" width={311} height={65}></img>
      </div>
      <div>
        <button className={styles.button} onClick={redirectToServices}>Services</button>
      </div>
      <div>
        <button className={styles.button} onClick={redirectToExperience}>Experience</button>
      </div>
      <div>
        <button className={styles.button} onClick={redirectToProfile}>About me</button>
      </div>
    </header>
  )
}

export default Header;