
import { Company } from '@/components/experience/company';
import styles from './page.module.css';
import { CompanyNames } from '@/api/portfolio';


export default async function Experience() {
  return (  
    <div className={styles.container}>
      <div className={styles.heading}>Work Experience</div>
      {CompanyNames?.map(((name, i) => 
        <Company  companyName={name} key={i} />
      ))}
    </div>
  )
}
