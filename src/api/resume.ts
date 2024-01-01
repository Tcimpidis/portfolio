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
  summary: "Senior Software Development Engineer. 8+ years experience specializing in full-stack development with a focus micro-service/micro-frontend architecture design. Passionate about creating robust scalable solutions using the newest technologies.",
  experience: [{
    entity: "Delhivery USA LLC",
    location: "Los Angeles, CA",
    title: "SENIOR SOFTWARE DEVELOPMENT ENGINEER",
    duration: "April 2022 - December 2023",
    responsibilities: [
      "Serve as architect for platform frontend.",
      "Oversee a team of three developers.",
      "Build deployment pipelines in github.",
      "Configure and manage cloudfront CDN and S3 bucket permissions in AWS.",
      "Design, implement and publish scalable component libraries.",
      "Work closely with stakeholders to build technical requirement documents.",
      "Estimate effort and create execution plans for deliverables.",
      "Define coding standards.",
      "Ensure code quality via code reviews. peer feedback sessions, and github action quality gates.",
      "Advise on conforming to security best practices.",
    ], 
  },
  {
    entity: "C.H.Robinson Worldwide",
    location: "Eden Prairie, MN",
    title: "SOFTWARE ENGINEER III",
    duration: "January 2015 - April 2022",
    responsibilities: ["A lead developer for C.H.Robinson's smallbusiness application https://Freightquote.com/book.",
    "Design and implement kafka event streams.",
    "Design and implement data management strategies through building data pipelines, which put data into UI models before consumption.",
    "Ensuring on demand data integrity.",
    "design and implement microservices.",
    "Website design and implementation.",
    "Collaborate with UX to build functional, scalable and responsive components.",
    "Architect redux state management.",
    "Work closely with security to ensure routes and applications aren't easy subjects for malicious attacks.",
    "Create event-driven architecture diagrams and flowcharts.",
    "Decompose existing site into micro-sites.",
    "Perform in-depth code reviews.","Work across various teams and technologies to ensure business needs are met and delivered.",
    "Engaged in sprint planning and grooming.",
    "Mentored new hires.",
    "Developed solutions for large-scale business initiatives.",
    "Designed and developed coding standards and practices, enforced them with in our team.",
    "Created scalable, clean code that passes quality gates.",
    "Triage support/production issues.",
    "Work directly with business shareholders.","Built code enhancements.",
    "Performed bug analysis.",
    "Wrote sql queries to pull data.",
   "Owned and managed deployments."], 
  }],
  education: [{
    entity: "Concordia University",
    location: "St Paul, MN",
    title: "CERTIFICATE IN SOFTWARE DEVELOPMENT",
    duration: "March 2015 - July 2015",
    responsibilities: [
      "Hands-on software developer apprenticeship with full-stack experience.", 
      "C# language fundamentals: variable declaration, looping constructs, conditional statements, class modeling, exception handling, LINQ Queries, unit testing and n-Tier application structure",
      "Web development fundamentals: ASP.Net MVC5, HTML5, CSS3, JavaScript, jQuery and AngularJS",
      "Database fundamentals: SQL server 2014, T-SQL query writing, stored procedures, data modeling and table creation"
    ], 
  },
  {
    entity: "Santa Fe College",
    location: "Gainesville, FL",
    title: "A.S. BOTANY",
    duration: "August 2007 - May 2010",
    responsibilities: ["Graduated with honors.", "Cumulative GPA:3.57."], 
  }],
  extracurricular: [{
    entity: "C.H.Robinson Worldwide - Robinson Cares",
    location: "Eden Prairie, MN",
    title: "TECHNICAL LEAD",
    duration: "January 2016 - April 2022",
    responsibilities: [
    "Co-lead all technical aspects of defining, creating and implementing the internal auction site for Robinson Cares charity group.",
    "Built out inital implementation in AngularJS",
    "Uplift site to use newer company tech-stack including setting up new devops workflows.",
    "Owned implementation of newer Oauth workflow to use windows authentication to automatically retreive and use JWT for signed in user.", 
    "Owned deployments.",
    "Triage production issue amd apply fixes. Sometimes while auction was active."], 
  }],
}