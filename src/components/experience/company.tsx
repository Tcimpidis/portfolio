'use client'
import { FC, useEffect, useState } from 'react';
import styles from './company.module.css';
import { Project } from './project';
import { CompanyMap, CompanyType, PersonalReference, ProjectDataDto, ProjectMap, ProjectType } from '@/api/portfolio';
import { PresonalReferences } from './personal-reference';

interface CompanyProps {
  companyName: CompanyType;
}

interface ProjectDto extends ProjectDataDto {
  type: ProjectType
}

export const Company: FC<CompanyProps> = ({
  companyName,
}) => {
  const [summary, setSummary] = useState<string>();
  const [references, setReferences] = useState<PersonalReference[]>()
  const [projects, setProjects] = useState<ProjectDto[]>()

  useEffect(() => {
    const fetchData = async () => {
      const companyResponse = await fetch('http://host.docker.internal:3000/portfolio/api/company-data', {
        method: "get",
      });
      const companyData = await companyResponse.json() as CompanyMap;
      const projectResponse = await fetch('http://host.docker.internal:3000/portfolio/api/project-data', {
        method: "get",
      });
      const projectData = await projectResponse.json() as ProjectMap;
      const { summary: summaryData, references: referenceData } = companyData[companyName];
      const localProjects = companyData[companyName].projects.map((name) => {
        return {...projectData[name], type: name}
      })
      setSummary(summaryData);
      setReferences(referenceData);
      setProjects(localProjects);
    }
    fetchData();
  },[companyName]);

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