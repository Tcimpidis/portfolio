
import { Company } from '@/components/experience/company';
import styles from './page.module.css';
import { CompanyNames } from '@/api/portfolio';
import { Suspense } from 'react';


export default async function Experience() {
  return (  
    <div className={styles.container}>
      <div className={styles.heading}>Work Experience</div>
      {CompanyNames?.map(((name, i) => 
      <Suspense fallback={<span>...loading</span>} key={i} >
        <Company  companyName={name} />
      </Suspense>
      ))}
    </div>
  )
}
