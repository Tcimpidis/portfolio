import { FC } from 'react';

import profile_1 from '../../assets/profile_1.png'
import styles from './index.module.css';

export const IntroductionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.shape_bottom} data-negative="false">
        <svg preserveAspectRatio="none" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.shape} d="M0,6V0h1000v100L0,6z" />
        </svg>
      </div>
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
    <img alt="introduction" height={591} src={profile_1} width={370} />
  </div>
)