import { FC, Suspense } from 'react';
import styles from './index.module.css';
import { CompanyMap, CompanyType, ProjectMap } from '@/api/portfolio';
import { PresonalReferences } from '../personal-reference';
import { ProjectReel } from '../project-reel/';
import { LoadingSpinner } from '@/common/components/loading-spinner';

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
        {references && (
          <Suspense fallback={<LoadingSpinner />}>
            <PresonalReferences references={references} />
          </Suspense>
        )}
        <Suspense fallback={<LoadingSpinner />} > 
          <ProjectReel projects={projects}/>
        </Suspense>
      </div>
    </div>
  )
}