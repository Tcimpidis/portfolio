'use client'
import Image from 'next/image';
import { Contact } from '../contact';
import styles from './index.module.css';
import Link from 'next/link';
import { FC } from 'react';
import { WindowSize, useWindowSize } from '@/common/hooks/useWindowSize';

export const Footer = () => {
  const { width } = useWindowSize();

  const renderDetail = () => {
    if(width) {
     return (
      <div className={styles.detail}>
        <div className={styles.summary_box}>
          <Image 
            alt='jamin_dapper'
            height={200}
            src={'/assets/dapper.jpeg'}
            width={180}
          />
          {renderSummary()}
        </div>
        {width >= WindowSize.XL && <SocialBox /> }
      </div>
     )
    }
    return (
      <div className={styles.detail}>
        <div className={styles.summary_box}>
          <Image 
            alt='jamin_dapper'
            height={200}
            src={'/assets/dapper.jpeg'}
            width={180}
          />
        </div>
      </div>
    )
  }

  const renderSummary = () => {
    if(width) { 
      return (
        <div className={styles.summary}>
          { width > WindowSize.MD && <Summary /> }
          { width < WindowSize.XL && <SocialBox /> }
        </div>
      )
    } 
    return null;
  }

  const renderContact = () => {
    if(width) {
      return (
        <>
          {width <= WindowSize.MD && (
            <div className={styles.summary}>
              <Summary /> 
            </div>
          ) }
          <Contact />
        </>
      )
    }
    return <Contact />
  }

  return (
    <div>
      <div className={styles.container}>
        {renderDetail()}
        {renderContact()}
      </div>
      <div className={styles.copywrite}>
          <span>&copy; 2023-2024 Jamin Tcimpidis. All Rights Reserved.</span>
      </div>
    </div>

  )
}

const SocialBox: FC = () => (
  <div className={styles.social_box}>
    <Link href="https://www.linkedin.com/in/jamintcimpidis/" target="_blank">
      <Image 
        alt='jamin_linkedIn'
        height={40}
        src={'/assets/LinkedIn.svg'}
        width={40}
      />
    </Link>
    <Link href="https://github.com/Tcimpidis/" target="_blank">
      <Image 
          alt='jamin_linkedIn'
          height={40}
          src={'/tools/github.svg'}
          width={40}
        />
    </Link>
  </div>
)

const Summary: FC = () => (
  <span>
    I&apos;m an full stack developer who specializes in secure, responsive and scalable frontends. Interested in seeing how I can help you? Let&apos;s talk!
  </span>
)