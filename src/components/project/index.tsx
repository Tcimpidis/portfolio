"use client";
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './index.module.css';
import { ImportantUrl, ProjectType, ToolData, ToolType } from '@/api/portfolio';
import { useRouter } from 'next/navigation';
import Markdown from 'react-markdown';
import Link from 'next/link';
import { envRoute } from '@/envUtility';

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
    <div className={styles.container} id={type}>
      <div className={styles.heading}>{title}</div>
      <ImageContainer importantUrls={importantUrls} overview={overview} tech={tech.sort((a, b) => 0.5 - Math.random())} title={title} type={type}/>
      {(specifications || takeaways)  && <DetailBox  specifications={specifications} takeaways={takeaways} /> }
    </div>
  )
} 

const ImageContainer: FC<{  type: ProjectType;
  title: string;
  tech: ToolType[];
  importantUrls?: ImportantUrl[];
  overview: string}> = ({
  type,
  title,
  tech,
  importantUrls,
  overview
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
        src={`${envRoute}/projects/${type.toLowerCase()}.png`}
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
                src={`${envRoute}/tools/${tool.toLowerCase()}.svg`}
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
            <label className={styles.icon_label}>
              {name}
            </label>
            <div className={styles.link_box}>
              {
              urlList && urlList?.map((url, i) => <Link href={url} key={i} target="_blank">{url}</Link>)
              }
            </div>
          </div>
        ) )}
        <div className={styles.overview_box}>
          <label className={styles.icon_label}>
            Overview
          </label>
          <span className={styles.overview_text}>{overview}</span>
        </div>
      </div>
    </div>
  )
}
 

const DetailBox : FC<{  
  specifications?: string;
  takeaways?: string;
}> = ({
  specifications,
  takeaways
}) => (
  <div className={styles.detail_box}>
    {specifications && 
      <>
        <label className={styles.icon_label}>
          Specifications
        </label>
        <Markdown className={styles.text}>{specifications}</Markdown>
      </>
    }
    {takeaways && 
      <>
        <label className={styles.icon_label}>
          Takeaways
        </label>
        <Markdown className={styles.text}>{takeaways}</Markdown>
      </>
    }
  </div>
)