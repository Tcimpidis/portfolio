import Image from 'next/image';
import { FC } from 'react';
import styles from './project.module.css';
interface ProjectProps {
  title: string;
  imageUrl: string;
  tech: string[];
  highlights: string;
}

export const Project: FC<ProjectProps> = ({
  title,
  imageUrl,
  tech,
  highlights,
}) => {
  return (
    <div>
      <div className={styles.heading}>{title}</div>
      <div className={styles.container}>
        <div>
          <Image
            alt={`${title}_image`}
            className={styles.image_box}
            height={300}
            src={imageUrl}
            width={450}
          />
        </div>
        <div className={styles.icon_box}>
          <div className={styles.item}>
            <label className={styles.label}>
              Tech:
            </label>
            <div className={styles.text}>
              {tech.map((name, i) => <span key={i}>{name}</span>)}
            </div>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>
              Highlights: 
            </label>
            <div className={styles.text}>
              {highlights}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 