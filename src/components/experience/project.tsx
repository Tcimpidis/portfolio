"use client";
import Image from 'next/image';
import { FC, useState } from 'react';
import styles from './project.module.css';
import { ImportantUrl, ProjectType, ToolData, ToolType } from '@/api/data';
import { useRouter } from 'next/navigation';
import Markdown from 'react-markdown';
import './project.css';
import Link from 'next/link';

interface ProjectProps {
  type: ProjectType;
  title: string;
  tech: ToolType[];
  highlights: string;
  importantUrls?: ImportantUrl[];
  index: number;
}

export const Project: FC<ProjectProps> = ({
  type,
  title,
  tech,
  highlights,
  importantUrls,
  index,
}) => {
  return (
    <div className={styles.container} id={type}>
      <div className={styles.heading}>{title}</div>
      <div className={styles.project}>
        {index % 2 === 0 ? (
          <>
            <ImageContainer importantUrls={importantUrls} tech={tech} title={title} type={type}/>
            <DetailBox highlights={highlights}/>
          </>
        ) : (
          <>
            <DetailBox highlights={highlights}/>
            <ImageContainer importantUrls={importantUrls} tech={tech} title={title} type={type}/>
          </>
        )}

      </div>
    </div>
  )
} 

const ImageContainer: FC<{  type: ProjectType;
  title: string;
  tech: ToolType[];
  importantUrls?: ImportantUrl[];}> = ({
  type,
  title,
  tech,
  importantUrls
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
    <div>
    <Image
      alt={`${title}_image`}
      className={styles.image_box}
      height={300}
      src={`/projects/${type.toLowerCase()}.png`}
      width={550}
    />
    <div className={styles.tech_container}>
      <label className={styles.icon_label}>
        Tech -
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
    <div>
      {importantUrls?.map(({name, urlList}, i) =>  (
        <div key={i} className={styles.url_container}>
          <label className={styles.icon_label}>
            {name} -
          </label>
          <div className={styles.link_box}>
            {
             urlList && urlList?.map((url, i) => <Link href={url} key={i} target="_blank">{url}</Link>)
            }
          </div>
        </div>
      ) )}
    </div>
  </div>
  )
}
 

const DetailBox : FC<{highlights: string}> = ({
  highlights,
}) => (
  <div className={styles.detail_box}>
    <Markdown className={styles.text}>{highlights}</Markdown>
  </div>
)