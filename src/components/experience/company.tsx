'use client'
import { FC, useEffect, useState } from 'react';
import styles from './company.module.css';
import { Project } from './project';
import { CompanyData, CompanyType, ProjectData, ProjectDataDto, ProjectType } from '@/api/data';

interface CompanyProps {
  companyName: CompanyType;
}

interface ProjectDto extends ProjectDataDto {
  type: ProjectType
}

export const Company: FC<CompanyProps> = ({
  companyName
}) => {
  const [projects, setProjects] = useState<ProjectDto[]>();

  useEffect(() => {
    const { projects } = CompanyData[companyName];
    const projectDetails = projects.map(name => {
      return {...ProjectData[name], type: name }
    })
    setProjects(projectDetails)
  },[companyName])

  return (
    <div className={styles.container}>
      <div className={styles.heading}>{companyName}</div>
      {projects?.map(({highlights, tech, title, type}, i) => 
        <Project
          highlights={highlights} 
          key={i}
          tech={tech} 
          title={title}
          type={type}
          />
      )}
    </div>
  )
}