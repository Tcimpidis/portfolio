import Image from 'next/image'

import styles from './page.module.css';
import { Person } from '../../components/person';

export default function People() {
  return (
    <div className={styles.container}>
      <Person 
        fullName='Jamin Tcimpidis'
        imageUrl='/assets/profile_1.png'
        summary='this Is a summary'
      />
    </div>
  )
}
