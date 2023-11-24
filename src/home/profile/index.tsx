import profile from '../../assets/profile_1.png';
import styles from  './index.module.css';

export const ProfileComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.bio}>
          <strong className={styles.name}>I'm Jamin.</strong>
          <div>
            <span>I have seven years or technical experience in the logistical space with C.H.Robinson. I'm well versed in working within large, intricate data systems. </span>
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
          <img
            src={profile}
            alt="profile">
          </img>
        </div>
      </div>
    </section>
  )
}