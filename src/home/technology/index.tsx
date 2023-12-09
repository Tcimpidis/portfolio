import { FC } from 'react';

import styles from './index.module.css';
import mongo_db from '../../assets/mongodb_logo.png';
import dotnet_core from '../../assets/dotnet_core_logo.png';
import oauth_2_logo from '../../assets/oauth_2_logo.png';
import react_logo from '../../assets/react_logo.png';
import redux_logo from '../../assets/redux_logo.png';
import sql from '../../assets/sql_logo.png';

interface TechnologyDetail {
  src: string;
  name: string;
}

const technologyDetails: TechnologyDetail[] = [
  {
    src: oauth_2_logo,
    name: "oauth"
  },
  {
    src: react_logo,
    name: "react"
  },
  {
    src: dotnet_core,
    name: ".netcore"
  },
  {
    src: redux_logo,
    name: "redux"
  },
  {
    src: mongo_db,
    name: "mongo_db"
  },
  {
    src: sql,
    name: "sql"
  },
]

export const TechnologyComponent = () => {

  return (
    <section className={styles.section}>
      <div>
        <h3 className={styles.header}>Technologies</h3>
        <strong>I am well versed in the following, plus many more.</strong>
      </div>
      <div className={styles.container}>
        {technologyDetails.map(({src, name}, i) => <Image alt={name} key={i} src={src}/>)}
      </div>
    </section>
  )
}

const Image: FC<{ alt: string, src: string}> = ({
  alt,
  src
}) => (
  <img 
    alt={alt}
    className={styles.image}
    height={215}
    src={src}
    width={215} 
  />
)