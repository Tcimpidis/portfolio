import { CompanyData, CompanyType, ProjectData, ProjectType } from "@/api/portfolio"
import { Project } from "@/components/project";
import styles from './page.module.css';
import { Suspense } from "react";
import { LoadingSpinner } from "@/common/components/loading-spinner";

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
  const productCompany = Object.keys(CompanyData).find((key) => CompanyData[key as CompanyType].projects.find((value) => value === projectName as ProjectType));
  
  return  (
    <div className={styles.container}>
      <Suspense fallback={<LoadingSpinner />}>
        <Project
          company={productCompany}
          importantUrls={importantUrls}
          overview={overview}
          specifications={specifications}
          takeaways={takeaways}
          tech={tech}
          type={type}
          title={title}
          />
      </Suspense>
    </div>
  )
  
  
}