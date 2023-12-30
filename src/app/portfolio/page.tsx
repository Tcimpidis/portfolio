import { Suspense } from 'react';
import styles from './page.module.css';
import { CompanyNames, CompanyData, ProjectData } from '@/api/portfolio';
import { Company } from '@/components/company';

export default async function Portfolio() {
  return (
    <div className={styles.background}>
      <div className={styles.title_container}>
        <span className={styles.title}>Portfolio</span>
      </div>
      <div className={styles.container}>
        <Suspense fallback={<span>...loading</span>}  >
          {CompanyNames?.map(((name, i) => 
            <Company  companyName={name} companyData={CompanyData} projectData={ProjectData} key={i}/>
          ))}
        </Suspense>
      </div>
    </div>
  )
}
