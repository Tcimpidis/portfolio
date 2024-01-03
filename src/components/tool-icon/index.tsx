'use client';
import Image from 'next/image';
import { FC, useCallback } from 'react';

import styles from './index.module.css';
import { ToolType } from '@/api/portfolio';

interface ToolProps {
  name: ToolType;
  onClick: (name: ToolType | undefined) => void; 
  onHover: (name: ToolType | undefined) => void;
  selectedTool: ToolType | undefined
}

export const Tool: FC<ToolProps> = ({name, onClick, onHover, selectedTool}) => {
  const handleOnClick = useCallback(() => {
    onClick(name);
  }, [name, onClick]);

  const onMouseEnter = useCallback(() => {
    onHover(name);
  }, [name, onHover]);

  const isSelected = selectedTool === name;
  const selectedStyle = isSelected ? styles.selected : '';
  return (
    <div 
      className={`${styles.item} ${selectedStyle}`}
      >
      <button 
        className={styles.item_button}
        onClick={handleOnClick}
        onMouseEnter={onMouseEnter}
        >
        <Image 
          alt={name}
          height={32}
          src={`/tools/${name.toLowerCase()}.svg`}
          width={32}
        />
      </button>
    </div>
  )
}