"use client";
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './index.module.css';
import { ImportantUrl, ProjectType, ToolData, ToolType } from '@/api/portfolio';
import { useRouter } from 'next/navigation';
import Markdown from 'react-markdown';
import Link from 'next/link';

interface ProjectProps {
  type: ProjectType;
  title: string;
  tech: ToolType[];
  overview: string;
  specifications?: string;
  takeaways?: string;
  importantUrls?: ImportantUrl[];
}

export const Project: FC<ProjectProps> = ({
  type,
  title,
  tech,
  overview,
  specifications,
  takeaways,
  importantUrls,
}) => {
  return (
    <div  id={type}>
      <div className={styles.heading_container}>
        <div className={styles.heading}>{title}</div>
      </div>
      <div className={styles.container}>
        <ImageContainer 
          importantUrls={importantUrls} 
          overview={overview} 
          specifications={specifications} 
          takeaways={takeaways} 
          tech={tech.sort((a, b) => 0.5 - Math.random())} 
          title={title} type={type}/>
      </div>
    </div>
  )
} 

const ImageContainer: FC<{  type: ProjectType;
  title: string;
  tech: ToolType[];
  overview: string,
  importantUrls?: ImportantUrl[];
  specifications?: string;
  takeaways?: string;}> = ({
  type,
  title,
  tech,
  overview,
  takeaways,
  specifications,
  importantUrls,
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
    router.push(`/?tool=${name}#tool_detail`)
  }
  return (
    <div className={styles.image_container}>
      <Image
        alt={`${title}_image`}
        className={styles.image_box}
        height={400}
        src={`/projects/${type.toLowerCase()}.png`}
        width={550}
      />
      <div className={styles.tech_container}>
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
        {importantUrls?.map(({name, urlList}, i) =>  (
          <div key={i} className={styles.url_container}>
            <label className={styles.detail_label}>
              {name}
            </label>
            <div className={styles.link_box}>
              {
              urlList && urlList?.map((url, i) => <Link href={url} key={i} target="_blank">{url}</Link>)
              }
            </div>
          </div>
        ) )}
        <div className={styles.detail_box}>
          <label className={styles.detail_label}>
            Overview
          </label>
          <Markdown className={styles.overview_text}>{overview}</Markdown>
        </div>
        {specifications && (
          <div className={styles.detail_box}>
            <label className={styles.detail_label}>
            Specifications
            </label>
            <Markdown className={styles.text}>{specifications}</Markdown>
          </div> 
        )}
        {takeaways && (
          <div className={styles.detail_box}>
            <label className={styles.detail_label}>
            Takeaways
            </label>
            <Markdown className={styles.text}>{takeaways}</Markdown>
          </div> 
        )}
      </div>
    </div>
  )
}