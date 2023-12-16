import { FC } from 'react';
import Markdown from 'react-markdown'
import styles from './tool-detail.module.css';

interface ToolDetailProps {
  displayName: string;
  years: number; 
  projects: string[];
  summary: string;
}

export const ToolDetail: FC<ToolDetailProps> = ({
  displayName,
  years,
  projects,
  summary,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.display_name}>
        {displayName}
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
          {projects.map((project, i) => <span key={i}> {project}</span>)}
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