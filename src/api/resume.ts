export interface ResumeDataDto {
  summary: string;
  experience: ResumeDetailDto[];
  education: ResumeDetailDto[];
  extracurricular: ResumeDetailDto[];
}

export interface ResumeDetailDto {
 entity: string;
 location: string;
 title: string;
 duration: string;
 responsibilities: string[]; 
}

export const ResumeData:ResumeDataDto = {
  summary: "Senior Software Development Engineer. 8+ years experience specializing in the full-stack development with a focus micro-service/micro-frontend architecture design. Passionate about creating robust scalable solutions using the newest technologies.",
  experience: [{
    entity: "Delhivery USA LLC",
    location: "Los Angeles, CA",
    title: "SENIOR SOFTWARE DEVELOPMENT ENGiNEER",
    duration: "April 2022 - December 02, 2023",
    responsibilities: [
      "Serve as architect for platform frontend",
      "Oversee a team of three developers",
      "Build deployment pipelines in github",
      "Configure and manage cloudfront CDN and S3 bucket permissions in AWS",
      "Design, implement and publish scalable component libraries.",
      "Work closely with stakeholders to build technical requirement documents.",
      "Estimate effort and create execution plans for deliverables.",
      "Define coding standards.",
      "Ensure code quality via code reviews. peer feedback sessions, and github action quality gates.",
      "Advise on conforming to security best practices.",
    ], 
  },
  {
    entity: "",
    location: "",
    title: "",
    duration: "",
    responsibilities: [""], 
  },
  {
    entity: "",
    location: "",
    title: "",
    duration: "",
    responsibilities: [""], 
  }],
  education: [{
    entity: "",
    location: "",
    title: "",
    duration: "",
    responsibilities: [""], 
  },
  {
    entity: "",
    location: "",
    title: "",
    duration: "",
    responsibilities: [""], 
  }],
  extracurricular: [{
    entity: "",
    location: "",
    title: "",
    duration: "",
    responsibilities: [""], 
  }],
}