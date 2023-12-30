'use client';
import { ImageReel } from "@/common/components/image-reel";
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ProjectDataDto } from '@/api/portfolio';
import styles from './index.module.css';
import { LoadingSpinner } from '@/common/components/loading-spinner';

interface ProjectReelProps {
  projects: ProjectDataDto[];
}

export const ProjectReel: FC<ProjectReelProps> = ({
  projects
}) => {
  const router = useRouter()
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);
  if(projects.length <= 0) {
    return (
      <LoadingSpinner />
    )
  }
  const selectedProject = projects[selectedProjectIndex];
  const { title, type, keyPoints, tech } = selectedProject;
  
  const handlePrevSlide = () => {
    if(selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    }
  }

  const handleNextSlide = () => {
    if(selectedProjectIndex < projects?.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  }

  const handleOnClick = () => {
    router.push(`/portfolio/${encodeURI(selectedProject.type)}`)
  }

  return (
    <ImageReel
      imageUrl={`projects/${type.toLowerCase()}.png`}
      currentSelectedIndex={selectedProjectIndex}
      reelLength={projects.length}
      actionOnClick={handleOnClick}
      handlePrevSlide={handlePrevSlide}
      handleNextSlide={handleNextSlide}
      buttonText="View Details"
    >
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <ul className={styles.key_points}>
          {keyPoints.map((point,i) => 
            <li key={i}>
              {point}
            </li>
          )}
        </ul>
      </div>
    </ImageReel>
  )
}