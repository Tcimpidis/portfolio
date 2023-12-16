import Image from 'next/image'

import styles from './page.module.css';
import { Tools } from '@/components/tools';
import { Experience } from '@/components/experience';

export default function People() {
  return (
    <div>
      <div className={styles.title}>
        Portfolio
      </div>
      <div className={styles.container}>
        <Tools />
      </div>
      <div className={styles.container_odd}>
        <Experience />
      </div>
    </div>
  )
}
