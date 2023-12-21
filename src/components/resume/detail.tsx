import { ResumeDetailDto } from '@/api/resume'
import styles from './detail.module.css'
import { FC } from 'react';

interface ResumeDetailProps {
  detail: ResumeDetailDto;
}


export const ResumeDetail: FC<ResumeDetailProps> = (
  {detail:{
    entity,
    location,
    title,
    duration,
    responsibilities
  }}
) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <span className={styles.entity}>{entity}</span>
      <span className={styles.location}>{location}</span>
    </div>
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <span className={styles.duration}>{duration}</span>
    </div>
    <ul className={styles.detail}>
      {responsibilities.map((value, i) => <li key={i}>{value}</li>)}
    </ul> 
  </div>
)