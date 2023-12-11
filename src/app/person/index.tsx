import { FC } from 'react';
import Image  from 'next/image';
import styles from './index.module.css';


export interface PersonDto {
  fullName: string; 
  imageUrl: string;
  summary?: string;
  detailsOnClick?: () => void;
}

export const Person: FC<PersonDto> = ({
  fullName,
  imageUrl,
  summary,
  detailsOnClick,
}) => {

  return (
    <div className={styles.container}>
      <div>
        <Image
          alt={`${fullName}_image`}
          height={550}
          src={imageUrl}
          width={350} 
        />
        {detailsOnClick && 
          <button onClick={detailsOnClick}>
            Details
          </button>
        }
      </div>
      <div>
        <h1>{fullName}</h1>
        {summary && summary}
      </div>
    </div>
  )
}