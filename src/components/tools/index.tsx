"use client";
import { useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';
import { Tool } from './tool-icon';
import { ToolDetail } from './tool-detail';
import { ToolsList, ToolData, ToolType } from '@/api/portfolio';
import { useSearchParams } from 'next/navigation';

export const Tools = () => {
  const searchParams = useSearchParams()
  const tool = searchParams.get('tool')
  const [focusedTool, setFocusedTool] = useState<ToolType>(tool as ToolType);

  useEffect(() => {
    if(tool) {
      setFocusedTool(tool as ToolType);
    }
  },[tool])

  const focusedDetails = useMemo(() => {
    if(focusedTool) {
      return { ...ToolData[focusedTool] } 
    }
  }, [focusedTool]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Tools/Skills</div>
      <div className={styles.toolbox}>
        <div className={styles.detail_box}> 
          {focusedDetails && focusedTool && 
            <ToolDetail 
            displayName={focusedDetails.displayName}
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