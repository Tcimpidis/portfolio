import Image from 'next/image'

import styles from './page.module.css';
import { Tools } from '@/components/tools';
import { Experience } from '@/components/experience';

export default function Portfolio() {
  return (
    <div>
      <div className={styles.title_container}>
        <span className={styles.title}>Portfolio</span>
      </div>
      <div className={styles.container}  id="tool_detail">
        <Tools />
      </div>
      <div className={styles.container_odd}>
        <Experience />
      </div>
    </div>
  )
}
