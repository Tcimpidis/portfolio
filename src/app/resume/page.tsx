import Image from 'next/image'

import styles from './page.module.css';
import { ResumeComponent } from '@/components/resume';

export default function Resume() {
  return (
    <div>
      <div className={styles.title_container}>
        <span className={styles.title}>Resume</span>
      </div>
      <div className={styles.container}> 
        <ResumeComponent />
      </div>

    </div>
  )
}
