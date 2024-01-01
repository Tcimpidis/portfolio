import { FC } from 'react';
import Markdown from 'react-markdown'
import styles from './index.module.css';
import Link from 'next/link';
import { ProjectData, ProjectType, ToolProficiencyEnum } from '@/api/portfolio';
import { ToolProficiency } from '../tool-proficiency';

interface ToolDetailProps {
  displayName: string;
  years: number; 
  projects: ProjectType[];
  summary: string;
  proficiency: ToolProficiencyEnum
}

export const ToolDetail: FC<ToolDetailProps> = ({
  displayName,
  years,
  projects,
  summary,
  proficiency,
}) => {
  return (
    <div className={styles.container} >
      <div className={styles.display_container}>
        <span className={styles.display_name}>{displayName}</span>

        <ToolProficiency proficiency={proficiency}/>
      </div>
      <div className={styles.item}>
        <label className={styles.label}>
          Years:
        </label>
        <div className={styles.text}>
          <span>+ {years}</span>
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label}>
          Projects: 
        </label>
        <div className={styles.project_text}>
          {projects.map((project, i) => 
            <Link 
              className={styles.project_link} 
              href={`/portfolio/${project}`}
              key={i}
              replace={true}
              shallow={true} 
              > 
              {ProjectData[project].title}
            </Link>)}
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.summary_label}>
          <label className={styles.label}>
            Summary: 
          </label>
        </div>
        <div >
          <Markdown className={styles.summary_text}>{summary}</Markdown>
        </div>
      </div>
    </div>
  )
}