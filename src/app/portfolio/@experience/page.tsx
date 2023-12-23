
import { Company } from '@/components/experience/company';
import styles from './page.module.css';
import { CompanyNames } from '@/api/portfolio';
import { Suspense } from 'react';


export default async function Experience() {
  return (  
    <div className={styles.container}>
      <div className={styles.heading}>Work Experience</div>
      <Suspense fallback={<span>...loading</span>}  >
        {CompanyNames?.map(((name, i) => 
          <Company  companyName={name} key={i}/>
        ))}
      </Suspense>
    </div>
  )
}
