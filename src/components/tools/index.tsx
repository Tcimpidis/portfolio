"use client";
import { useMemo, useState } from 'react';
import styles from './index.module.css';
import { Tool } from './tool-icon';
import { ToolDetail } from './tool-detail';
import { ToolsList, ToolData, ToolType } from '@/api/data';

export const Tools = () => {
  const [focusedTool, setFocusedTool] = useState<ToolType>();
  
  const focusedDetails = useMemo(() => {
    if(focusedTool) {
      return { ...ToolData[focusedTool] } 
    }

  }, [focusedTool])
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Tools/Skills</div>
      <div className={styles.toolbox}>
        <div className={styles.detail_box}> 
          {focusedDetails && focusedTool && 
            <ToolDetail 
            displayName={focusedTool}
            projects={focusedDetails.projects}
            summary={focusedDetails.summary}
            years={focusedDetails.years}
          />
          }
        </div>
        <div className={styles.icon_box}> 
          {ToolsList.map((tool, i) => <Tool 
            name={tool}
            onClick={setFocusedTool}
            key={i} />)}
          </div>
      </div>
    </div>
  )
}