import { FC } from 'react';

import styles from './index.module.css';

interface TechnologyDetail {
  src: string;
  name: string;
}

const technologyDetails: TechnologyDetail[] = [
  {
    src: "assets/oauth_2_logo.png",
    name: "oauth"
  },
  {
    src: "assets/react_logo.png",
    name: "react"
  },
  {
    src: "assets/dotnet_core_logo.png",
    name: ".netcore"
  },
  {
    src: "assets/redux_logo.png",
    name: "redux"
  },
  {
    src: "assets/mongodb_logo.png",
    name: "mongo_db"
  },
  {
    src: "assets/sql_logo.png",
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