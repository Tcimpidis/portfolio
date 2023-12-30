import { CompanyType } from "./portfolio";

export interface HomeDataDto {
  summary: string;
  highlightReel: Highlight[];
}

export interface Highlight {
  imageName: string;
  company: CompanyType;
  title: string;
}

export const HomeData: HomeDataDto = {
  summary: `I am a full stack developer with over **8 years** of developing production ready, globally distributed software. I've prodomantently worked for logistics companies, with a focus on customer facing **SaaS web applications**. My passion being towards the frontend, I've strived to work and that domain. I have over 5 years experience working with **React** and **Typspcript**. Recently I've taken on learning **Next.js** to leverage to full capacity of **React 18**.`,
  highlightReel: [
    {
      imageName: 'chrobinson',
      company: "C.H Robinson worldwide",
      title: "Software Engineer III",
    },
    {
      imageName: 'delhivery',
      company: "Delhivery",
      title: "Senior Software Development Engineer",
    },
    {
      imageName: 'tcimpidis',
      company: "Tcimpidis",
      title: "Creator",
    },
  ]
}