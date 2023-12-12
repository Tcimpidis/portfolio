import { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.css';

export const IntroductionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ProfileImage />
        <IntroductionText />
      </div>
    </section>
  )
};

const IntroductionText: FC = () => (
  <div className={styles.bio}>
    <div className={styles.slogan}>
      <strong>
        <span className={styles.emphasis}>Communicate </span>first,
        <span className={styles.emphasis}> develop</span> second. Asking the right 
        <span className={styles.emphasis}> questions</span> for the right 
        <span className={styles.emphasis}> solutions</span>.
      </strong> 
    </div>
    <div className={styles.pitch}>
      Hire an developer who is passionate about keeping an open line of communication throughout the entire development process. The more we can know, the easier it is to build a solution that works for you. 
    </div>
  </div>
);

const ProfileImage: FC = () => (
  <div className={styles.picture}>
    <Image alt="introduction" height={591} src='/assets/jamin_image_1.png' width={370} />
  </div>
)