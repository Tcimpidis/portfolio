import Image from 'next/image'

import styles from './page.module.css';

export default function Portfolio() {
  return (
    <div>
      <div className={styles.title_container}>
        <span className={styles.title}>About me</span>
      </div>
    </div>
  )
}
