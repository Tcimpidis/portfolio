'use client';
import styles from './index.module.css';
import { Company } from './company';
import { CompanyNames } from '@/api/portfolio';

export const Experience = () =>  (
  <div className={styles.container}>
    <div className={styles.heading}>Work Experience</div>
    {CompanyNames?.map(((name, i) => 
      <Company companyName={name} key={i}/>
    ))}
  </div>
)