'use client';
import Image from 'next/image';
import { FC, useCallback } from 'react';

import styles from './tool-icon.module.css';
import { ToolType } from '@/api/portfolio';
import { envRoute } from '@/envUtility';

interface ToolProps {
  name: ToolType;
  onClick: (name: ToolType) => void; 
}

export const Tool: FC<ToolProps> = ({name, onClick}) => {
  const handleOnClick = useCallback(() => {
    onClick(name);
  }, [name, onClick]);

  return (
    <div 
    className={styles.item}
    >
    <button 
      className={styles.item_button}
      onClick={handleOnClick}
      >
      <Image 
        alt={name}
        height={40}
        src={`${envRoute}/tools/${name.toLowerCase()}.svg`}
        width={40}
      />
    </button>
    </div>


  )
}