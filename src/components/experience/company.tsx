'use client'
import { FC, useEffect, useState } from 'react';
import styles from './company.module.css';
import { Project } from './project';
import { CompanyMap, CompanyType, ProjectMap } from '@/api/portfolio';
import { PresonalReferences } from './personal-reference';

interface CompanyProps {
  companyName: CompanyType;
  companyData: CompanyMap;
  projectData: ProjectMap;
}

export const Company: FC<CompanyProps> = ({
  companyName,
  companyData,
  projectData
}) => {

  const { summary, references }= companyData[companyName];
  const projects = companyData[companyName].projects.map(name => {
    return {...projectData[name], type: name }
  })

  return (
    <div className={styles.container}>
      <div className={styles.heading}>{companyName}</div>
      <div className={styles.summary}>{summary}</div>
      {references &&<PresonalReferences references={references} /> }
      {projects?.map(({highlights, importantUrls, tech, title, type}, i) => 
        <div className={styles.project} key={i}>
          <Project
            highlights={highlights}
            importantUrls={importantUrls}
            tech={tech} 
            title={title}
            type={type}
            />
         </div> 
      )}
    </div>
  )
}