'use client';
import Image from 'next/image';
import { FC, useCallback } from 'react';

import styles from './tool-icon.module.css';
import { ToolType } from '@/api/data';

interface ToolProps {
  name: ToolType;
  onClick: (name: ToolType) => void; 
}

export const Tool: FC<ToolProps> = ({name, onClick}) => {
  const handleOnClick = useCallback(() => {
    onClick(name);
  }, [name, onClick]);

  return (
    <button 
      className={styles.item}
      onClick={handleOnClick}
      >
      <Image 
        alt={name}
        height={40}
        src={`/tools/${name.toLowerCase()}.svg`}
        width={40}
      />
    </button>

  )
}