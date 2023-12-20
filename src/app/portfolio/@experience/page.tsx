
import { Company } from '@/components/experience/company';
import styles from './page.module.css';
import { CompanyMap, CompanyNames, CompanyType, ProjectMap } from '@/api/portfolio';

async function getCompanyList() {
  const res = await fetch('http://localhost:3000/portfolio/api/company-list', {method: "get"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<CompanyType[]>;
}

async function getCompanyData() {
  const res = await fetch('http://localhost:3000/portfolio/api/company-data', {method: "get"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<CompanyMap>;
}

async function getProjectData() {
  const res = await fetch('http://localhost:3000/portfolio/api/project-data', {method: "get"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<ProjectMap>;
}


export default async function Experience() {
  const companies = await getCompanyList();
  const companyData = await getCompanyData();
  const projectData = await getProjectData();
  return (  
    <div className={styles.container}>
      <div className={styles.heading}>Work Experience</div>
      {companies?.map(((name, i) => 
        <Company companyData={companyData} companyName={name} key={i} projectData={projectData}/>
      ))}
    </div>
  )
}
