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
  summary: `I am a **full stack developer** with over eight years of experience developing production ready, globally distributed software. I've predominantly worked in the logistics sector, with a focus on customer facing **SaaS web applications**. Passionate about **frontend** development, I've driven my career in that direction. With over five and half years of experience working with **React** and **TypeScript**. Recently I've taken on learning **Next.js** to leverage to full capacity of **React 18**.`,
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