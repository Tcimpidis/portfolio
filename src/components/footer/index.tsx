'use client'
import Image from 'next/image';
import { Contact } from '../contact';
import styles from './index.module.css';
import { envRoute } from '@/envUtility';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <div className={styles.summary_box}>
          <Image 
            alt='jamin_dapper'
            height={200}
            src={`${envRoute}/assets/dapper.jpeg`}
            width={180}
          />
          <div>
            <div className={styles.summary}>
              I&apos;m an full stack developer who specializes in secure, responsive, and scalable frontends. Interested in seeing how I can help you? Let&apos;s Talk! 
            </div>
          </div>

        </div>
        <div className={styles.social_box}>
          <Link href="https://www.linkedin.com/in/jamintcimpidis/" target="_blank">
            <Image 
              alt='jamin_linkedIn'
              height={40}
              src={`${envRoute}/assets/LinkedIn.svg`}
              width={40}
            />
          </Link>
          <Link href="https://github.com/Tcimpidis/" target="_blank">
            <Image 
                alt='jamin_linkedIn'
                height={40}
                src={`${envRoute}/tools/github.svg`}
                width={40}
              />
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  )
}