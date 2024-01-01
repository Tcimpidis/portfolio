import { ProjectData, ProjectType } from "@/api/portfolio"
import { Project } from "@/components/project";
import styles from './page.module.css';

export default function Page({ params }: { params: { project: string } }) {
  const projectName = decodeURI(params.project);
  const { 
      type,
      title,
      tech,
      overview,
      specifications,
      takeaways,
      importantUrls
    } = ProjectData[projectName as ProjectType];
  
  return  (
    <div className={styles.container}>
      <Project  
        importantUrls={importantUrls}
        overview={overview}
        specifications={specifications}
        takeaways={takeaways}
        tech={tech}
        type={type}
        title={title}
         />
    </div>
  )
  
  
}