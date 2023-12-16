'use client'
import { FC, useEffect, useState } from 'react';
import styles from './company.module.css';
import { Project } from './project';

interface ProjectDto {
  title: string;
  imageUrl: string;
  tech: string[];
  highlights: string;
}

interface CompanyProps {
  companyName: string;
}

export const Company: FC<CompanyProps> = ({
  companyName
}) => {
  const [projects, setProjects] = useState<ProjectDto[]>();

  useEffect(() => {
    const proj = getProjects(companyName);
    setProjects(proj)
  },[companyName])

  return (
    <div className={styles.toolbox}>
      <div className={styles.heading}>{companyName}</div>
      {projects?.map(({highlights, imageUrl, tech, title}, i) => 
        <Project
          highlights={highlights} 
          key={i}
          imageUrl={imageUrl}
          tech={tech} 
          title={title}
          />
      )}
    </div>
  )
}

const getProjects = (companyName: string) => {
  return [{
    title: 'Delhivery',
    imageUrl: 'https://64.media.tumblr.com/51ce939c3b7570134515eea1c7eb59ff/tumblr_n2pgeb86ro1tw7pebo1_400.jpg',
    tech: ['React', 'Typescript'],
    highlights: 'a bunch of stuff',
  }]
}