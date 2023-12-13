import Image from 'next/image'

import styles from './page.module.css';
import { Person } from '../../components/person';
import { envRoute } from '@/envUtility';

export default function People() {
  return (
    <div className={styles.container}>
      <Person 
        fullName='Jamin Tcimpidis'
        imageUrl={`${envRoute}/assets/jamin_image_1.png`}
        summary='this Is a summary'
      />
    </div>
  )
}
