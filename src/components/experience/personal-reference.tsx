import { PersonalReference } from "@/api/data"
import { FC } from "react"
import Image from 'next/image';
import styles from './personal-reference.module.css';

interface PresonalReferencesProps {
  references: PersonalReference[]
}

export const PresonalReferences: FC<PresonalReferencesProps> = ({
  references
}) => {
  const handleOnReferenceClick = (url: string) => () => {
    window.open(url)
  }
  return (
    <div className={styles.container}>
      <label className={styles.heading}>References
      </label>
      <div className={styles.item_list_box}>
        {references && references.map(({name, role, linkedIn}, i) => (
          <button className={styles.item_box} key={i} type="button" onClick={handleOnReferenceClick(linkedIn as string)}>
            <div><strong>{name}</strong></div>
            <div className={styles.item} >
              {role}
              <Image alt="linkedIn" src="./assets/LinkedIn.svg" height={15} width={14}/>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}