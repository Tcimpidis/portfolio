import { Suspense } from 'react';
import styles from './page.module.css';
import { CompanyData, ProjectData, CompanyType } from '@/api/portfolio';
import { Company } from '@/components/company';
import { LoadingSpinner } from '@/common/components/loading-spinner';

export default async function Portfolio() {
  return (
    <div className={styles.background}>
      <div className={styles.title_container}>
        <span className={styles.title}>Portfolio</span>
      </div>
      <div className={styles.container}>
        <Suspense fallback={<LoadingSpinner />}  >
          {Object.keys(CompanyData).map(((key, i) => 
            <Company  companyName={key as CompanyType} companyData={CompanyData} projectData={ProjectData} key={i}/>
          ))}
        </Suspense>
      </div>
    </div>
  )
}
