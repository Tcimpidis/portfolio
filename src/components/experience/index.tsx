'use client';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { Company } from './company';

interface CompanyDto {
  name: string;
}

export const Experience = () => {
  const [companys, setCompanies ] = useState<CompanyDto[]>();

  useEffect(() => {
    const comp = getCompanies();
    setCompanies(comp);
  },[])
  
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Work Experience</div>
      {companys?.map((({name}, i) => 
        <Company companyName={name} key={i}/>
      ))}
    </div>
  )
}

const getCompanies = () => {
  return [{
    name: 'Delhivery'
  }]
} 