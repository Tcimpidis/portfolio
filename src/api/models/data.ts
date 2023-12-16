
export interface ToolDataDto {
  displayName: string;
  years: number; 
  projects: string[];
  summary: string;
}

export interface ProjectDataDto {
  title: string;
  imageUrl: string;
  tech: string[];
  highlights: string;
}

export interface CompanyDataDto {
  Name: string;
  projects: string[];
}