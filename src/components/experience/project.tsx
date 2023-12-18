"use client";
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './project.module.css';
import { ProjectType, ToolData, ToolType } from '@/api/data';
import { useRouter } from 'next/navigation';
import Markdown from 'react-markdown';
import './project.css';

interface ProjectProps {
  type: ProjectType;
  title: string;
  tech: ToolType[];
  highlights: string;
}

export const Project: FC<ProjectProps> = ({
  type,
  title,
  tech,
  highlights,
}) => {
  const router = useRouter();
  const [activeTool, setActiveTool] = useState<number| undefined>();

  const onMouseEnter = (tool: number) => () =>  {
    setActiveTool(tool)
  }

  const onMouseLeave = () => {
    setActiveTool(undefined);
  }

  const onIconClick = (name: ToolType) => () => {
    router.push(`?tool=${name}#tool_detail`)
  }

  return (
    <div className={styles.container} id={type}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.project}>
        <div>
          <Image
            alt={`${title}_image`}
            className={styles.image_box}
            height={300}
            src={`/projects/${type.toLowerCase()}.png`}
            width={450}
          />
        </div>
        <div className={styles.detail_box}>
          <div className={styles.tech_container}>
            <label className={styles.icon_label}>
              Tech:
            </label>
            <div className={styles.tech}>
              {tech.map((tool, i) => (
                <div key={i} className={styles.tech_item}>
                  <Image 
                    alt={tool}
                    onMouseEnter={onMouseEnter(i)}
                    onMouseLeave={onMouseLeave}
                    onClick={onIconClick(tool)}
                    height={20}
                    src={`/tools/${tool.toLowerCase()}.svg`}
                    width={20}
                  />
                  {activeTool !== undefined && activeTool === i &&
                    <div className={styles.active_tech}>
                      {ToolData[tool].displayName}
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
          <div className={styles.item}>
            <label className={styles.icon_label}>
              Highlights: 
            </label>
            <Markdown className={styles.text}>{highlights}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
} 