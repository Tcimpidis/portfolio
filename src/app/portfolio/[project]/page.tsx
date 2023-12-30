import { CompanyType, ProjectData, ProjectType } from "@/api/portfolio"
import { Project } from "@/components/project";

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
    <div>
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