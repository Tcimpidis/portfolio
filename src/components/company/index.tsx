'use client'
import { FC, useEffect, useState } from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import { CompanyMap, CompanyType, PersonalReference, ProjectDataDto, ProjectMap, ProjectType, ToolType } from '@/api/portfolio';
import { PresonalReferences } from '../personal-reference';
import { ProjectReel } from '../project-reel/';
import { useRouter } from 'next/navigation';
import { envRoute } from '@/envUtility';

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
  const { summary, references } = companyData[companyName];

  const projects = companyData[companyName].projects.map((name) => {
    return {...projectData[name]}
  });

  return (
    <div className={styles.container} id={companyName}>
      <div className={styles.heading}>{companyName}</div>
      <div className={styles.summary}>{summary}</div>
      <div className={styles.details}>
        {references &&<PresonalReferences references={references} /> }
        <ProjectReel projects={projects}/>
      </div>
    </div>
  )
}