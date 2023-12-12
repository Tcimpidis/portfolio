import Image from 'next/image';

import styles from  './index.module.css';

export const ProfileComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bio}>
          <strong className={styles.name}>I&apos;m Jamin.</strong>
          <div>
            <span>I have seven years or technical experience in the logistical space with C.H.Robinson. I&apos;m well versed in working within large, intricate data systems. </span>
          </div>
          <div>
          <ul className={styles.skill_list}>
            <strong className={styles.skill_header}>Skills:</strong>
            <li className={styles.skill_item}>Event driven architecture</li>
            <li className={styles.skill_item}>Microsite architecture</li>
            <li className={styles.skill_item}>Agile methodolgy</li>
            <li className={styles.skill_item}>Mentoring</li>
          </ul>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            alt="profile"
            width={300}
            height={500}
            src="assets/profile_1.png"
          />
        </div>
      </div>
    </section>
  )
}