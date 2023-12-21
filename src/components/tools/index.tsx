"use client";
import { FC, useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';
import { Tool } from './tool-icon';
import { ToolDetail } from './tool-detail';
import { ToolType, ToolMap } from '@/api/portfolio';
import { useSearchParams } from 'next/navigation';

interface ToolListProps {
  toolData: ToolMap;
  toolList: ToolType[]
}

export const ToolList: FC<ToolListProps> = ({
  toolData,
  toolList
}) => {
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
      return { ...toolData[focusedTool] } 
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
          {toolList.map((tool, i) => <Tool 
            name={tool}
            onClick={setFocusedTool}
            key={i} />)}
          </div>
      </div>
    </div>
  )
}