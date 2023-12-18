'use client'
import { FC, useEffect, useState } from 'react';
import styles from './company.module.css';
import { Project } from './project';
import { CompanyData, CompanyType, ProjectData, ProjectDataDto, ProjectType } from '@/api/data';
import Link from 'next/link';

interface CompanyProps {
  companyName: CompanyType;
}

interface ProjectDto extends ProjectDataDto {
  type: ProjectType
}

export const Company: FC<CompanyProps> = ({
  companyName
}) => {

  const { summary, references }= CompanyData[companyName];
  const projects = CompanyData[companyName].projects.map(name => {
    return {...ProjectData[name], type: name }
  })

  return (
    <div className={styles.container}>
      <div className={styles.heading}>{companyName}</div>
      <div className={styles.summary}>{summary}</div>
      <div>
        {references && references.map(({name, role, linkedIn}, i) => (
          <div key={i}>
            <span>{name}</span>
            <span>{role}</span>
            <Link href={linkedIn as string} target="blank">LinkedIn</Link>
          </div>
        ))}
      </div>
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