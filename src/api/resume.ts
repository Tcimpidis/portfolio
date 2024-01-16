export interface ResumeDataDto {
  summary: string;
  experience: ResumeDetailDto[];
  education: ResumeDetailDto[];
}

export interface ResumeDetailDto {
  entity: string;
  location: string;
  title: string;
  duration?: string;
  responsibilities: string[];
}

export const ResumeData: ResumeDataDto = {
  summary:
    "Methodical and detail-oriented Senior Software Development Engineer with 8+ years of experience in leading frontend engineering teams, designing and implementing applications and websites, and ensuring high-quality UX and UI experiences. Highly skilled at performing comprehensive code reviews, team oversight, and advising on adherence to best security practices. Adept at designing and implementing both microservices and micro-frontends. Proficiently utilize programming languages, including React, TypeScript, and C#.",
  experience: [
    {
      entity: "Delhivery USA LLC",
      location: "Remote",
      title: "SENIOR SOFTWARE DEVELOPMENT ENGINEER",
      duration: "April 2022 - December 2023",
      responsibilities: [
        "Directed frontend architecture by defining a platform framework, establishing coding best-practices and creating workflows that enabled continual, adaptive development.",
        "Designed effective scalable component libraries by working closely with stakeholders, building technical requirement documents, execution plans and estimating effort. Ensuring all work aligned with business expectations.",
        "Managed a team of 3 by delegating consumable features, performing in-depth code reviews and administering 1 on 1 feedback sessions that fostered an environment of growth.",
        "Secured sensitive data by adhering to OWASP best practices, building secure deployment pipelines and encrypting data transfers to give peace of mind to both users and shareholders.",
        "Created beautiful and responsive websites by working closely with UX engineers, implementing state of the art technologies, and using user feedback session. Providing websites that are intuitive, clean and concise.",
      ],
    },
    {
      entity: "C.H.Robinson Worldwide",
      location: "Eden Prairie, MN / Remote",
      title: "SOFTWARE ENGINEER III",
      duration: "January 2015 - April 2022",
      responsibilities: [
        "A lead developer for C.H.Robinson's smallbusiness application https://Freightquote.com/book.",
        "Created technical improvements by spearheading monolith decomposition to micro-websites, designing Kafka event streams for revenue capture activities and creating data-management workflows that removed development bottlenecks and improved UI responsiveness by 30%.",
        "Encouraged a collaborative environment by offering to mentor new hires, being an active participant in agile ceremonies, listening and engaging with stakeholders. Giving others on my team confidence to add their thoughts which created more concise and well-defined work items.",
        "Ensured the proper management of production code by engaging in in-depth code reviews, building with the scope of quality gates and ensuring all code complies with OWASP standards. Enabling less than 1% downtime of our website and secure management of all PII.",
        "Created value for the business by working across many functional teams, learning the business process as well as development process and working with developers in different cities and time zones. Ensuring all production issues were resolved immediately, with downtimes lasting minutes instead of hours.",
      ],
    },
  ],
  education: [
    {
      entity: "Concordia University",
      location: "St Paul, MN",
      title: "CERTIFICATE IN SOFTWARE DEVELOPMENT",
      responsibilities: [
        "Hands-on software developer apprenticeship with full-stack experience.",
        "C# language fundamentals: variable declaration, looping constructs, conditional statements, class modeling, exception handling, LINQ Queries, unit testing and n-Tier application structure",
        "Web development fundamentals: ASP.Net MVC5, HTML5, CSS3, JavaScript, jQuery and AngularJS",
        "Database fundamentals: SQL server 2014, T-SQL query writing, stored procedures, data modeling and table creation",
      ],
    },
    {
      entity: "Santa Fe College",
      location: "Gainesville, FL",
      title: "Associates in Science in Botany",
      responsibilities: ["Graduated with honors.", "Cumulative GPA:3.57."],
    },
  ],
};
