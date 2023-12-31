import { ToolProficiencyEnum } from "@/api/portfolio"
import { FC } from "react"
import styles from "./index.module.css";
import { IconContext } from "react-icons";
import { BsTools } from "react-icons/bs";

interface ToolProficiencyProps {
  proficiency: ToolProficiencyEnum
}

export const ToolProficiency: FC<ToolProficiencyProps> = ({
  proficiency
}) => {

  const container = () => {
    switch (proficiency) { 
      case ToolProficiencyEnum.intermediate:
        return `${styles.intermediate_container}`;
      case ToolProficiencyEnum.professional:
        return `${styles.professional_container}`;
      case ToolProficiencyEnum.expert:
        return`${styles.expert_container}`;
      default: 
        return `${styles.novice_container}`;
    }
  }

  const icon = () => {
    switch (proficiency) { 
      case ToolProficiencyEnum.intermediate:
        return `${styles.intermediate}`;
      case ToolProficiencyEnum.professional:
        return `${styles.professional}`;
      case ToolProficiencyEnum.expert:
        return`${styles.expert}`;
      default: 
        return `${styles.novice}`;
    }
  }

  return (
    <div >
      <div className={container()}>
        <span className={icon()}>{ToolProficiencyEnum[proficiency]}</span>
        <IconContext.Provider value={{className:`${icon()}`}}>
          <BsTools />
        </IconContext.Provider>
      </div>
    </div>
  )
}
