export enum ToolProficiencyEnum {
  novice,
  intermediate,
  professional,
  expert,
}

export interface ToolDataDto {
  displayName: string;
  years: number;
  projects: ProjectType[];
  summary: string;
  proficiency: ToolProficiencyEnum;
}

export interface ProjectDataDto {
  title: string;
  tech: ToolType[];
  overview: string;
  specifications?: string;
  takeaways?: string;
  keyPoints: string[];
  importantUrls?: ImportantUrl[];
  type: ProjectType;
}

export interface ImportantUrl {
  name: string;
  urlList: string[];
}

export interface CompanyDataDto {
  projects: ProjectType[];
  summary: string;
  references?: PersonalReference[];
  type: CompanyType;
}

export interface PersonalReference {
  name: string;
  role: string;
  linkedIn?: string;
}

/* Company Names */
const CHRobinson = "C.H Robinson worldwide";
const Delhivery = "Delhivery";
const Tcimpidis = "Tcimpidis";

export type CompanyType =
  | typeof CHRobinson
  | typeof Delhivery
  | typeof Tcimpidis;

export type CompanyMap = {
  [key in CompanyType]: CompanyDataDto;
};

/* Project Names */
const CustomerSignUpUI = "getos1_signup";
const OrganizationUI = "organization_ui";
const MarketplaceUI = "marketplace_ui";
const DeveloperPortal = "developer_portal";
const ConsoleUI = "console_ui";
const FreightQuote = "freightquote_by_chr";
const CHRobinsonOnline = "navisphere_online";
const Portfolio = "jamin.tcimpidis.com";
const TMC = "tmc";
const Personal = "personal";

export type ProjectType =
  | typeof CustomerSignUpUI
  | typeof MarketplaceUI
  | typeof DeveloperPortal
  | typeof FreightQuote
  | typeof CHRobinsonOnline
  | typeof Portfolio
  | typeof TMC
  | typeof Personal
  | typeof ConsoleUI
  | typeof OrganizationUI;

export type ProjectMap = {
  [key in ProjectType]: ProjectDataDto;
};

const Agile = "agile";
const Angular = "angular";
const Apache = "apache";
const Aws_cloudfront = "aws-cloudfront";
const Azure_devops = "azure-devops";
const CSharp = "CSharp";
const CSS_Modules = "CSS-Modules";
const CSS3 = "CSS3";
const Docker = "Docker";
const Dot_net_core = "dot-net-core";
const Figma = "figma";
const Git_bash = "git-bash";
const Github = "github";
const Google_analytics = "google-analytics";
const HTML5 = "HTML5";
const JavaScript = "JavaScript";
const Jenkins = "Jenkins";
const Jest = "Jest";
const Kafka = "kafka";
const Kubernetes = "kubernetes";
const Launchdarkly = "launchdarkly";
const Lerna = "lerna";
const Linux = "linux";
const Microsoft_azure = "microsoft-azure";
const Mongodb = "mongodb";
const Next_js = "Next-js";
const Node_js = "node-js";
const NPM = "NPM";
const Oauth = "oauth";
const OWASP = "OWASP";
const PlatformUI = "platform_ui";
const Powershell = "powershell";
const Protractor = "protractor";
const React_hook_form = "react-hook-form";
const React_query = "react-query";
const React_testing_library = "react-testing-library";
const React = "react";
const Redux = "redux";
const REST = "REST";
const Rollupjs = "rollupjs";
const S3 = "S3";
const Sass = "sass";
const Storybook = "storybook";
const Sql_server = "sql-server";
const Tailwindcss = "tailwindcss";
const Terraform = "terraform";
const TypeScript = "TypeScript";
const Ubuntu = "ubuntu";
const VBNet = "VBNet";
const Web_performance = "Web-Performance";
const Webpack = "webpack";
const Xml = "xml";
const Yaml = "yaml";

export type ToolType =
  | typeof Agile
  | typeof Angular
  | typeof Apache
  | typeof Aws_cloudfront
  | typeof Azure_devops
  | typeof CSharp
  | typeof CSS_Modules
  | typeof CSS3
  | typeof Docker
  | typeof Dot_net_core
  | typeof Figma
  | typeof Git_bash
  | typeof Github
  | typeof Google_analytics
  | typeof HTML5
  | typeof JavaScript
  | typeof Jenkins
  | typeof Jest
  | typeof Kafka
  | typeof Kubernetes
  | typeof Launchdarkly
  | typeof Lerna
  | typeof Linux
  | typeof Microsoft_azure
  | typeof Mongodb
  | typeof Next_js
  | typeof Node_js
  | typeof NPM
  | typeof Oauth
  | typeof OWASP
  | typeof PlatformUI
  | typeof Powershell
  | typeof Protractor
  | typeof React_hook_form
  | typeof React_query
  | typeof React_testing_library
  | typeof React
  | typeof Redux
  | typeof REST
  | typeof Rollupjs
  | typeof S3
  | typeof Sass
  | typeof Storybook
  | typeof Sql_server
  | typeof Tailwindcss
  | typeof Terraform
  | typeof TypeScript
  | typeof Ubuntu
  | typeof VBNet
  | typeof Web_performance
  | typeof Webpack
  | typeof Xml
  | typeof Yaml;

export type ToolMap = {
  [key in ToolType]: ToolDataDto;
};

export const CompanyData: CompanyMap = {
  [`${CHRobinson}`]: <CompanyDataDto>{
    projects: [FreightQuote, TMC, CHRobinsonOnline],
    summary: `At C.H. Robinson I learned the foundations of builiding scalable software. Fortunate enough to be exposed to a expansive technical network, where multiple functional teams, worked in tandem, to deliver business initiatives, without interrupting current functionality, as they adapted to new technical demands in the industry. I was introduced to, and developed working understandings of older technologies. Then later tasked with the uplift of these legacy apps. I was also blessed with a patient and knowledgable mentor Chris Hince, whose guidance and support nurtured my growth while at C.H. Robinson. With Chris's oversight I co-lead the production of an internal C.H.Robinson applciation for their yearly charity auctions. Which helped facilitate over $150,000 in charitable donations annually. My time at C.H. Robinson awarded many opportunities to practice owning and developing solutions in a vary stable, growth centered enviornment.`,
    references: [
      {
        name: "Chris Hince",
        role: "Architect/Mentor",
        linkedIn: "https://www.linkedin.com/in/chrishince",
      },
      {
        name: "John Holmen",
        role: "Manager",
        linkedIn: "https://www.linkedin.com/in/john-holmen-15725b26",
      },
      {
        name: "Carrie Drzewiecki",
        role: "Lead Product Manager",
        linkedIn: "https://www.linkedin.com/in/carriedrzewiecki",
      },
      {
        name: "Ryan Arhart",
        role: "UX Designer",
        linkedIn: "https://www.linkedin.com/in/ryan-arhart-26b21712",
      },
      {
        name: "Jack Hamby",
        role: "Software Engineer",
        linkedIn: "https://www.linkedin.com/in/jack-hamby-626ba7125",
      },
      {
        name: "Jim Rein",
        role: "Director Software Engineer",
        linkedIn: "https://www.linkedin.com/in/jim-rein-7030355",
      },
    ],
    type: CHRobinson,
  },
  [`${Delhivery}`]: <CompanyDataDto>{
    projects: [CustomerSignUpUI, MarketplaceUI, DeveloperPortal, ConsoleUI],
    summary:
      "Delhivery was the first job where I had to make technical desicions without guidance. I was the sole UI designer, developer, and architect for the commercialization branch of their SaaS product: Getos1. Tasked with creating an ecosystem that would allow for common login and UX across multiple applications. I created an internal framework of two libraries. One for core functionial features. Such as Http interceptors, Oauth wrappers, and base contexts/providers. The other for common reuseable styles and components, from complex components like a generic payment widget, to simple components like common buttons and inputs. These libraries were used in four different websites hosted in the os1 domain. In the framework I built, there was provisioning for managing micro-frontends across the shared domain. Which is utilized by two apps in the domain. The frameworked worked for the product, though a little tedious to maintain given the scope. The feedback I received from managers, colueges, and the product team was generally positive.",
    references: [
      {
        name: "Derek Gordon",
        role: "Lead Engineer",
        linkedIn: "https://www.linkedin.com/in/gordon-derek",
      },
      {
        name: "Sam Schneider",
        role: "Architect",
        linkedIn: "https://www.linkedin.com/in/samaschneider",
      },
      {
        name: "Nathaniel Davidson",
        role: "Software Developer",
        linkedIn: "https://www.linkedin.com/in/nathanieldavidson",
      },
      {
        name: "Shreya Jivani",
        role: "Manager",
        linkedIn: "https://www.linkedin.com/in/shreya-jivani-6bb85378",
      },
      {
        name: "James Chainey",
        role: "Hiring Manager",
        linkedIn: "https://www.linkedin.com/in/james-chainey-5673009",
      },
    ],
    type: Delhivery,
  },
  [`${Tcimpidis}`]: <CompanyDataDto>{
    projects: [Portfolio, Personal],
    summary:
      "A brand focused on developing scalable, responsive, rich frontend applications and frameworks. The product of a passion for frontend development coupled with proven expertise in enterpise hardened methodoliges and principles. Tcimpidis focuses on maintainablity, security and performance. Striving to build beautiful products, that complie to lightweight bundles. For a secure, cost effect approach to development.",
    type: Tcimpidis,
  },
};

export const ProjectData: ProjectMap = {
  [`${CustomerSignUpUI}`]: <ProjectDataDto>{
    title: "Customer Sign-up UI",
    tech: [
      Web_performance,
      Agile,
      TypeScript,
      Tailwindcss,
      React,
      React_hook_form,
      Jest,
      Git_bash,
      React_query,
      Github,
      React_testing_library,
      REST,
      S3,
      Google_analytics,
      HTML5,
      JavaScript,
      Node_js,
      Yaml,
      Aws_cloudfront,
      PlatformUI,
      Webpack,
      Figma,
      CSS3,
      Linux,
      NPM,
    ],
    overview: `A step driven user interface for product selection. As well as collleting company, billing and payment detials.
    `,
    specifications: `
- Product specific screens for post purchase details. 
- App is hosted in a sub route of a static site.
- Requires query params to render otherwise will redirect out of app to product site.
- App used Axios to connect with Node.js gateway api.
- Sign up process used Redis caches and validates form at each step.
- React providers keeping form state, router state, and browser router state synced. 
- Deployed through github actions to S3 bucket through cloudfront.
`,
    takeaways: `
- This app uses react router with app state to maintain the form. This required that a solution for managing form state (Current sign up step) with browser navigation buttons.
`,
    keyPoints: [
      "Product select screen",
      "Step driven user interface for capturing customer details",
      "Secure Credit Card transactions",
    ],
    importantUrls: [
      {
        name: "Website Url",
        urlList: ["https://getos1.com"],
      },
    ],
    type: CustomerSignUpUI,
  },
  [`${MarketplaceUI}`]: <ProjectDataDto>{
    title: "Marketplace UI",
    tech: [
      Web_performance,
      Agile,
      TypeScript,
      Tailwindcss,
      Oauth,
      React,
      React_hook_form,
      React_query,
      Jest,
      Git_bash,
      Github,
      React_testing_library,
      REST,
      S3,
      Google_analytics,
      HTML5,
      JavaScript,
      Node_js,
      Yaml,
      Aws_cloudfront,
      PlatformUI,
      Webpack,
      Figma,
      CSS3,
      Linux,
      NPM,
      Storybook,
    ],
    overview: `Marketplace offers platform users an interface for managing their existing subscriptions, subscribing to new apps released on the Marketplace, and, if they have the right role, create subscriptions behalf of their customers.`,
    specifications: `
- Developed with [Webpack](/?tool=${Webpack}#tool_detail) module-federation as a host app.
- Authed site requiring signup through the [Customer Sign Up UI](/portfolio/${CustomerSignUpUI}).
- App uses Axios wrapped with react-query to optimize data fetching. The Axios server connects to a Node.js gateway api.
- Checkout process with payment capture that leverages redis with form validation.
- View and pay invoices.
- Supports switching between user organizations.
- Deployed through github actions to S3 bucket through cloudfront.
- Modularization of sub domains in app -- Each route definied itself, its mounting component, and path, as well as a couple Platform UI specific parameters that allowed for seemless integration into the left navigation compoonent.
`,
    takeaways: `
- Module frontend architecture of Platform UI was effective, even allowing the host app to route the child, however the mount was always a bit slow. Which brought down user experience.
- Abstration of react context usage to Platform UI was effective.
- Oidc-context left something to be desired. Redirects weren't working as expected but I was not able to prioritize resolving.
`,
    keyPoints: [
      "Purchase, manage, and upgrade subcriptions",
      "Role enabled subscription creation for product owners",
      "View and manage billing details",
      "Host microfrontend",
    ],
    importantUrls: [
      {
        name: "Website Url",
        urlList: ["https://marketplace.getos1.com"],
      },
    ],
    type: MarketplaceUI,
  },
  [`${OrganizationUI}`]: <ProjectDataDto>{
    title: "Organization UI",
    tech: [
      Web_performance,
      Agile,
      TypeScript,
      Tailwindcss,
      React,
      React_query,
      Oauth,
      React_hook_form,
      Jest,
      Git_bash,
      Github,
      React_testing_library,
      REST,
      S3,
      Google_analytics,
      HTML5,
      JavaScript,
      Node_js,
      Yaml,
      Aws_cloudfront,
      PlatformUI,
      Webpack,
      Figma,
      CSS3,
      Linux,
      NPM,
      Rollupjs,
    ],
    overview: `Organiztion UI gives platform users access to their organization details. A micro-frontend, it can be used in both marketplace and developer portal.`,
    specifications: `
- Developed with [Webpack](?tool=${Webpack}#tool_detail) module-federation as a remote app.
- Authed site requiring signup through the [Customer Sign Up UI](/portfolio/${CustomerSignUpUI}).
- App uses Axios wrapped with react-query to optimize data fetching. The Axios server connects to a Node.js gateway api.
- Suports file/image capture for company logo.
- Can run standalone with an active auth session and an organizaitonId query parameter. 
- Deployed through github actions to S3 bucket through cloudfront.
- Consumed by [MarketplaceUI](/portfolio/${MarketplaceUI}).`,
    takeaways: `
- Business ask that never really was used as intended. 
- Ended up being somewhat tedious to maintain given the nature of its use. 
- Somewhat annoying to run locally as well.
- Really interesting technology that opens up a lot of possiblilties for hosting sub apps.
- Curious to see if something similiar could be implemented in next.js.
`,
    keyPoints: ["View and manage organization details", "Remote microfronted"],
    importantUrls: [
      {
        name: "Website Url",
        urlList: ["https://marketplace.getos1.com/organization"],
      },
    ],
    type: OrganizationUI,
  },
  [`${DeveloperPortal}`]: <ProjectDataDto>{
    title: "Developer Portal UI",
    tech: [
      Web_performance,
      Agile,
      TypeScript,
      Tailwindcss,
      React,
      Oauth,
      React_hook_form,
      Jest,
      Git_bash,
      Github,
      React_testing_library,
      REST,
      S3,
      Google_analytics,
      HTML5,
      JavaScript,
      Node_js,
      Yaml,
      Aws_cloudfront,
      PlatformUI,
      Webpack,
      Figma,
      CSS3,
      Linux,
      NPM,
      Storybook,
    ],
    overview: `A hub for developers to build apps within the OS1 ecosystem. With the intention of selling those apps to users through the marketplaces. Apps can be packaged in groups and sold as solutions, or be developed in isolation.`,
    specifications: `
- Developed with [Webpack](?tool=${Webpack}#tool_detail) module-federation as a host app.
- Authed site requiring signup through its own login portal.
- App uses Axios for data fetching. The Axios server connects to a Node.js gateway api.
- Create organizations and add developers to an organization. 
- Deployed through github actions to S3 bucket through cloudfront.`,
    takeaways: `
- I built this with inital specs but we ended up downsizing pretty rapidly.
- Platform UI base components and context worked well. 
- Developer Portal ended up being deprioritized and wasn't kept up to date with Platform UI.   
`,
    keyPoints: [
      "Create and manage developer organizations and teams",
      "View and test developer APIs",
      "Setup developer sandbox",
    ],
    importantUrls: [
      {
        name: "Website Url",
        urlList: ["https://developer.getos1.com"],
      },
    ],
    type: DeveloperPortal,
  },
  [`${ConsoleUI}`]: <ProjectDataDto>{
    title: "Console UI",
    tech: [
      Web_performance,
      Agile,
      TypeScript,
      Tailwindcss,
      React,
      Oauth,
      React_hook_form,
      Jest,
      Git_bash,
      Lerna,
      Next_js,
      Github,
      React_testing_library,
      REST,
      S3,
      Google_analytics,
      HTML5,
      JavaScript,
      Node_js,
      Yaml,
      Aws_cloudfront,
      PlatformUI,
      Webpack,
      Figma,
      CSS3,
      Linux,
      NPM,
      Rollupjs,
      Docker,
    ],
    overview: `Console UI remote module that integrates with an internal solution that is available on the marketplace. It facilitates login and accessibility to an instance of a purchased apps or solutions.`,
    specifications: `
- Monorepo built with lerna.
- Exposes a [webpack](#${Webpack}) module fedeation remote module for apps that what to integrate to consume.
- Built in react.
- Exposes an Axios client with predefined headers for data fetching. 
- Exposes function for pulling apps associated with user.`,
    takeaways: `
- Took over responsibility of this app well after it was already deployed and in use. There were issues with what was being exposed/how it was intended to be used vs how it was able to be used.
- Poor communication on inital development between the teams led to integration issues. 
- In the end there were significant real issues with consuming the module as intended in a Next.js app - the technology the consuming team was using.
- Great exposure to module federation and how to use it in Next.js.s.
`,
    keyPoints: [
      "Light authentication header",
      "Connects users to a product developed within developer portal",
      "View and navigate to product apps",
    ],
    type: ConsoleUI,
  },
  [`${FreightQuote}`]: <ProjectDataDto>{
    title: "FreightQuote by CHR",
    tech: [
      Agile,
      Azure_devops,
      TypeScript,
      CSS3,
      Oauth,
      React,
      React_hook_form,
      Jest,
      Git_bash,
      Github,
      React_testing_library,
      REST,
      Google_analytics,
      HTML5,
      JavaScript,
      Node_js,
      Launchdarkly,
      CSharp,
      Docker,
      Dot_net_core,
      Figma,
      Terraform,
      OWASP,
      Sql_server,
      Kafka,
      Kubernetes,
      Jenkins,
      Mongodb,
      NPM,
      Powershell,
      Protractor,
      Redux,
      Sass,
      Web_performance,
      Webpack,
      Xml,
    ],
    overview: `FreightQuote by CHR delivers it's vast carrier network to infrequent shippers. Offering free instant quotes on shipments. Users who want to create an order can go through an easy sign up process and start shipping.`,
    specifications: `
- Greenfield project. Started just as it went live and hadn't captured more than 10 orders.
- Built in the newest C.H. Robinson technologies: 
  - React frontend.
  - Servicestack .net core gateways, microservicees, and kafka producers/consumers.
  - full devops pipeline with unit and e2e quality gates.
- Had to work across functional domains to delivery FreightQuote business needs.`,
    takeaways: `
- Most notably a B2B integration with twilio for managing user sms alerts.
  - First time developing an event based workflow.
- Spearheaded UI decomposition initiative to our leadership group.
  - App deployment was getting bogged down with end-to-end tests. 
  - The Application started managing so many tasks and if any of them failed during deployment, the entire deployment would fail.
  - There were times where we'd lose weeks of deliverables due to these bottlenecks.
  - The site spilt into funcitonal pieces across the domain.
`,
    keyPoints: [
      "Collect minimal data to show users instant free quotes",
      "Create users and manage billing details",
      "Email and text notification/tracking",
      "Create and manage orders",
      "Secure payment management",
    ],
    importantUrls: [
      {
        name: "Website Url",
        urlList: ["https://freightquote.com/book"],
      },
    ],
    type: FreightQuote,
  },
  [`${TMC}`]: <ProjectDataDto>{
    title: "TMC of C.H.Robinson",
    tech: [
      Agile,
      Angular,
      CSS3,
      REST,
      HTML5,
      JavaScript,
      CSharp,
      VBNet,
      Microsoft_azure,
      React,
      Webpack,
      Kafka,
      Sql_server,
      Xml,
      Jenkins,
      Github,
      Git_bash,
      Docker,
      Dot_net_core,
      Powershell,
      TypeScript,
    ],
    overview: `TMC offers C.H.Robinsons platform as a service for customers that manage their own shipment network. These are customers that have their own relationships with carriers and to manage all of their logistics details on a single network.`,
    specifications: ` 
- Delivered business initiatives across the entire chrobinson system. 
- Worked with many teams, in many different code bases, with different deployment prototcals and legacy technologies.
- Requrired doing in-depth techincal analysis across all of C.H.Robinson systems. 
- Own and track deployment progress across the other systems.`,
    takeaways: `
- While in this role C.H. Robinson was going through massive technical changes. Moving away from legacy deployment stratigies and legacy tech.
- Towards the end of the role the team built a branch in Poland.
  - Mentored and work with engineers in differnt time zones. 
  - Traveled to Poload to train developers in C.H. Robinson systems.
- I worked within TMC for about three years before I tranistioned to [Freightquote by CHR](/portfolio/${FreightQuote}).`,
    keyPoints: [
      "Deliver large initiatives across many products",
      "Work in various code bases managing all aspects of the logistic pipeline",
      "Work in a variety of technologies",
    ],
    type: TMC,
  },
  [`${CHRobinsonOnline}`]: <ProjectDataDto>{
    title: "Navisphere Online",
    tech: [
      Agile,
      Angular,
      CSS3,
      REST,
      HTML5,
      JavaScript,
      CSharp,
      VBNet,
      Microsoft_azure,
      Sql_server,
      Xml,
    ],
    overview: `A portal linking C.H.Robinson's vast customer network to their extensives carrier catalog.`,
    specifications: `
- VB.Net and C# MVC with sql backend.
- Legacy interactions with many functions and aggregations living in the data layer.
- Visual studio version control.
- Manual deployments had to be staged across the various enviroments with Prod deployments happening usually once a month.
- The responsibilities extended to the Navisphere Trucks and Wearhouse applications. All with the same tech.`,
    takeaways: `
- First job held after graduating from coding bootcamp. 
- An apprentice and worked with my mentor to deliver enchancements and bug fixes across the stack.
- A little over 9 months into this role, the team was reconsontructed.
- Started working with for the [TMC](/portfolio/${TMC}) business.
    `,
    keyPoints: [
      "legacy VB.Net product that was being uplifted",
      "Deep SQL stored procedure logic",
      "Legacy deployment release process",
    ],
    type: CHRobinsonOnline,
  },
  [`${Portfolio}`]: <ProjectDataDto>{
    title: "jamin.tcimpidis.com",
    tech: [
      TypeScript,
      React,
      Jest,
      Git_bash,
      Github,
      CSS3,
      React_testing_library,
      HTML5,
      JavaScript,
      Node_js,
      Yaml,
      Next_js,
      CSS_Modules,
      Apache,
      Ubuntu,
      Linux,
      Docker,
      NPM,
      React_hook_form,
      Web_performance,
    ],
    overview: `jamin.tcimpidis.com is a merger of the brand [Tcimpidis](/portfolio/#${Tcimpidis}) and the need to showcase the creator Jamin Tcimpidis' talents. The focus not only being the UI, but the full end to end production of this website. From design to deployment. 
    `,
    specifications: `
- Built in Next.js.
- All data is static to the server.
- CSS Modules.
- Typescript.
- Containerized with docker and deployed through github actions and container management.
- Hosted on Nginx reverse proxy with ACME companion.`,
    takeaways: `
- Website was built as an exploration of Next.js.
- Standalone server build with secure environment variables.
- Utilization of route handlers from creating email request.
- Logo, icon and color pallet designed by [Tcimpidis](/portfolio/#${Tcimpidis}). 
- Network from domain name through VPS server, DNS management, domain email management, reverse proxy container, acme companion container, enviornment setup and CI/CD were all built by [Tcimpidis](/portfolio/#${Tcimpidis}).
- The codebase is public 
    `,
    importantUrls: [
      {
        name: "Github repo",
        urlList: ["https://github.com/tcimpidis/portfolio"],
      },
    ],
    keyPoints: [
      "Creator designed and developed",
      "Next.js server components",
      "Ubuntu VPS with Nginx reverse proxy",
    ],
    type: Portfolio,
  },
  [`${Personal}`]: <ProjectDataDto>{
    title: "Personal projects",
    tech: [
      TypeScript,
      React,
      Jest,
      Git_bash,
      Github,
      React_testing_library,
      HTML5,
      JavaScript,
      Node_js,
      Yaml,
      Next_js,
      CSS_Modules,
      Apache,
      Ubuntu,
      Linux,
      Storybook,
      CSharp,
      Dot_net_core,
      Lerna,
      NPM,
      Oauth,
      Sass,
      Webpack,
    ],
    overview: `Jamin Tcimpidis repos not connected to the brand Tcimpidis, and code sandbox where more code examples can be found.`,
    keyPoints: ["Coding challenges", "Repositories"],
    importantUrls: [
      {
        name: "Jamin's repo",
        urlList: ["https://github.com/JaminTcimpidis"],
      },
      {
        name: "Code sandbox challenges",
        urlList: [
          "https://codesandbox.io/p/sandbox/number-counter-hsnmz7",
          "https://codesandbox.io/p/devbox/crypto-converter-ch3v7z",
          "https://codesandbox.io/p/sandbox/capture-the-flag-nzf5vw",
        ],
      },
    ],
    type: Personal,
  },
};

const getProjectListForTool = (tool: ToolType) => {
  const projectsThatUseTool = Object.keys(ProjectData).filter((key) =>
    ProjectData[key as ProjectType].tech.includes(tool)
  );
  return projectsThatUseTool as ProjectType[];
};

export const ToolData: ToolMap = {
  [`${Agile}`]: <ToolDataDto>{
    displayName: "Agile Methodology",
    years: 8.5,
    projects: getProjectListForTool(Agile),
    summary: `
- Experience with one and two week sprints.
- Engaged in all ceremonies: Grooming, Planning, Standup and Retro.
- Used tools like Jira, Azure, and trello to track work.
- Reflected on burn down metrics to improve productivity.
`,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Angular}`]: <ToolDataDto>{
    displayName: "Angular",
    years: 2.5,
    projects: getProjectListForTool(Angular),
    summary: `
- Built a site using original angularJS many years ago.
- Have worked a little with angular4, also many years ago.
- Moved away from angular towards more library driven software.
`,
    proficiency: ToolProficiencyEnum.novice,
  },
  [`${Apache}`]: <ToolDataDto>{
    displayName: "Apache",
    years: 0.2,
    projects: getProjectListForTool(Apache),
    summary: `
- Crypto mining with GPUs.
- Initial domain server for tcimpidis.com.
- Setup with https.
      `,
    proficiency: ToolProficiencyEnum.novice,
  },
  [`${Aws_cloudfront}`]: <ToolDataDto>{
    displayName: "Aws Cloudfront",
    years: 1.5,
    projects: getProjectListForTool(Aws_cloudfront),
    summary: `
- Use cloudfront urls to path into S3 buckets.
- Deployed to S3 through cloudfront using github actions.
- Configure cloudfront origins.
- Setup url configurations and attached to S3 buckets.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Azure_devops}`]: <ToolDataDto>{
    displayName: "Azure Devops",
    years: 2.5,
    projects: getProjectListForTool(Azure_devops),
    summary: `
- managed deployement secrets.
- created project configurations.
- built and managed azure pipelines.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${CSharp}`]: <ToolDataDto>{
    displayName: "C#",
    years: 7,
    projects: getProjectListForTool(CSharp),
    summary: `
- Extensive use of C# as a server language. With some legacy Razor MVC experince.
- Very famility with C# OOP principles.
- Dependency injections, Ienumerable, Ilist, and other linq extensions. 
- Many years experience developing in Visual Studio with advanced proficiency of the tool.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${CSS_Modules}`]: <ToolDataDto>{
    displayName: "CSS Modules",
    years: 0.5,
    projects: getProjectListForTool(CSS_Modules),
    summary: `
- Used in portfolio website.
- Created some base level classes to be consumed.
- Consuming a styel class seems more effective at the file level. 
- To keep modules from getting brittle I use color variables and small amounts of compose.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${CSS3}`]: <ToolDataDto>{
    displayName: "CSS3",
    years: 8.5,
    projects: getProjectListForTool(CSS3),
    summary: `
- All projects have been web applications that relied on css for styling.
- Css variables are a powerful tool fo consistent colors, padding, and margins.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Docker}`]: <ToolDataDto>{
    displayName: "Docker",
    years: 4,
    projects: getProjectListForTool(Docker),
    summary: `
- Firm understanding of the concept behind docker, containerization, and the idea of hosting a self sustaining container on a server.
- Portfolio web app is a next.js container. 
- The biggest area of improvement for myself would be container security, but that may be more of a network issue than a container issue. 
      `,

    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Dot_net_core}`]: <ToolDataDto>{
    displayName: "Dot net core",
    years: 4,
    projects: getProjectListForTool(Dot_net_core),
    summary: `
- Setup many web servers. 
- I understood, updated, and built a few apps at the config level but for the most part it wasn't necessary. 
- My expertice in .net core is coupled with C#, servicestack, and kafka. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Figma}`]: <ToolDataDto>{
    displayName: "Figma",
    years: 4,
    projects: getProjectListForTool(Figma),
    summary: `
- Use from a developer perspective to obtain specs.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Git_bash}`]: <ToolDataDto>{
    displayName: "Git Bash",
    years: 7,
    projects: getProjectListForTool(Git_bash),
    summary: `
- Use git command line exclusively when interacting with github.
- Create repos, push, update, rebase, merge and manage upstream from cli.
- Use submodules.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Github}`]: <ToolDataDto>{
    displayName: "Github",
    years: 7,
    projects: getProjectListForTool(Github),
    summary: `
- Branching strategies for deployment management and redundancy.
- Manage repo secrets. 
- Create, configure, and authorize sso keys for push/pull security.
- Define and enfore branch rules.
      `,
    proficiency: ToolProficiencyEnum.expert,
  },
  [`${Google_analytics}`]: <ToolDataDto>{
    displayName: "Google Analytics",
    years: 4,
    projects: getProjectListForTool(Google_analytics),
    summary: `
- Pushed events.
- Ensure events fired with correct name and payload.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${HTML5}`]: <ToolDataDto>{
    displayName: "HTML 5",
    years: 8.5,
    projects: getProjectListForTool(HTML5),
    summary: `
- Understand most html elements and their proper usages. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${JavaScript}`]: <ToolDataDto>{
    displayName: "JavaScript",
    years: 8.5,
    projects: getProjectListForTool(JavaScript),
    summary: `
- Used VB.net and C# MVC applciations. Using jquery scripts to maninuplate client objects and make async server requests.
- Used in Angular projects.
- Used in React projects.
- Used in Node API projects.
- Familiar with JavaScript global hoisting, generator functions and asynchronicity. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Jenkins}`]: <ToolDataDto>{
    displayName: "Jenkins",
    years: 4,
    projects: getProjectListForTool(Jenkins),
    summary: `
- Deployed with jenkins through devOps
- Used UI to triage build failures
- Rarely configured any builds
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Jest}`]: <ToolDataDto>{
    displayName: "Jest",
    years: 5,
    projects: getProjectListForTool(Jest),
    summary: `
- Create jest mocks both of local files and npm modules. 
- Mock hooks, api calls, and other depenedencies.
- Mocks run the same every time and aren't doubled up unexpectedly.
- Chain tests.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Kafka}`]: <ToolDataDto>{
    displayName: "Kafka",
    years: 2,
    projects: getProjectListForTool(Kafka),
    summary: `
- Build consumers and producers with .net core.
- Deep understanding of core kafka features such as partitioning consumers and initializing with scalablity settings. 
- Setup event workflows with kafka for message redudancy.
- Designed event driven workflows with Kafka.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Kubernetes}`]: <ToolDataDto>{
    displayName: "Kubernetes",
    years: 3,
    projects: getProjectListForTool(Kubernetes),
    summary: `
- Debug Containers in cluster with kubermetes cli.
- Created helm charts.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Launchdarkly}`]: <ToolDataDto>{
    displayName: "LaunchDarkly",
    years: 4,
    projects: getProjectListForTool(Launchdarkly),
    summary: `
- Utilized company launch darkly contract to create A/B test and feature flag pathways.
- Useful for developing features without creating bottleneck.
- Only configured within consuming application.
- Did not manage tokens or flags in anyway. Could only request to have flags created.  
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Lerna}`]: <ToolDataDto>{
    displayName: "lerna",
    years: 1,
    projects: getProjectListForTool(Lerna),
    summary: `
- Create self referencing mono-repo.
- Build pipelines for each package in mono-repo.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Linux}`]: <ToolDataDto>{
    displayName: "Linux",
    years: 4,
    projects: getProjectListForTool(Linux),
    summary: `
- CRUD commands on files and directories.
- Update existing files with nano.
- Update localhost proxys.
- Run ssh scripts.
- Create and manage system users. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Microsoft_azure}`]: <ToolDataDto>{
    displayName: "Microsoft Azure",
    years: 3,
    projects: getProjectListForTool(Microsoft_azure),
    summary: `
- Connected github deployments to azure jobs.
- Managed secrets.
- Triage deployement issues.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Mongodb}`]: <ToolDataDto>{
    displayName: "MongoDB",
    years: 2,
    projects: getProjectListForTool(Mongodb),
    summary: `
- Proficent with MongoDB compass.
- Used document database for holding real-time data.
- Consumers would listen from different kafka streams and write to DB. 
- Predefined queries optimized the document reads so they were efficient when read. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Next_js}`]: <ToolDataDto>{
    displayName: "Next.js",
    years: 1,
    projects: getProjectListForTool(Next_js),
    summary: `
- Worked to integrate a module-federation remote app in a Next.js host.
- Had limited success. All implementations broke the existing routing of the app. 
- This website is built with Next.js.
- Leverages dynamic routing.
- Route handler implementations were tested - App performed better hydrating from server component.
- Parallel routes were also tested - For this website the implementation wasn't offering anything.
- Linking and navigating
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Node_js}`]: <ToolDataDto>{
    displayName: "Node.js",
    years: 6,
    projects: getProjectListForTool(Node_js),
    summary: `
- Use node to run scripts from time to time.
- Understand asynchronous nature of a node server.
- Done minor work with Node Express apis and GRPC services.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${NPM}`]: <ToolDataDto>{
    displayName: "NPM",
    years: 8.5,
    projects: getProjectListForTool(NPM),
    summary: `
- Extensive use of package managers.
- Know how to setup and maintain package.json.
- Build and deploy packages in npm. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Oauth}`]: <ToolDataDto>{
    displayName: "Oauth",
    years: 5,
    projects: getProjectListForTool(Oauth),
    summary: `
- Advanced understanding of Oauth principles and implementation.
- Integrate internal and exteranl auth providers.
- Manage auth across session and tabs.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${OWASP}`]: <ToolDataDto>{
    displayName: "OWASP",
    years: 3,
    projects: getProjectListForTool(OWASP),
    summary: `
- Firm understanding of security principels using OWASP guidelines.
- Build all products with OWASP principles in mind ensure company and user data is secure. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${PlatformUI}`]: <ToolDataDto>{
    displayName: "Platform UI Libraries",
    years: 1.9,
    projects: getProjectListForTool(PlatformUI),
    summary: `
- Platform UI is the grouping of libraries created to run the OS1 commercialization websites. 
- Plaform UI Core:
  - Single location for HTTP inteceptors, Oauth Provider, Microfrontend component, Configuration Provider, Axios Client generator and module.
  - Each Website implemented their own instance. not a singleton.
- Platform UI Common: 
  - Large host of commonly used components. Buttons, Inputs, and some more complex items like state specific toggles, document upload components, and payment widget. 
  - Reused across all websites, singleton.
      `,
    proficiency: ToolProficiencyEnum.expert,
  },
  [`${Powershell}`]: <ToolDataDto>{
    displayName: "Powershell",
    years: 3,
    projects: getProjectListForTool(Powershell),
    summary: `
- Connect to docker or kubernetes from a windows.
- Update existing files.
- Run scripts. 
- Start and kill processes.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Protractor}`]: <ToolDataDto>{
    displayName: "Protractor",
    years: 4,
    projects: getProjectListForTool(Protractor),
    summary: `
- I worked with Protractor sporadically with the project that leveraged it. 
- There was a QA developer who wrote the tests.
- Occassionally update tests with small changes.
- It was a good example of solid testing practices.
`,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${React_hook_form}`]: <ToolDataDto>{
    displayName: "React-hook-form",
    years: 6,
    projects: getProjectListForTool(React_hook_form),
    summary: `
- Used extensively in all the projects built. 
- Create complex form management systems.
- Amazing tool for managing complex validation challeges. 
- Great documentation.
`,
    proficiency: ToolProficiencyEnum.expert,
  },
  [`${React_query}`]: <ToolDataDto>{
    displayName: "React-Query",
    years: 1,
    projects: getProjectListForTool(React_query),
    summary: `
- Responsive client cacheing solution for API.
- Easily abstracted out too hooks.
- Easily configurable. 
- Great documentation.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${React_testing_library}`]: <ToolDataDto>{
    displayName: "React Testing library",
    years: 3,
    projects: getProjectListForTool(React_testing_library),
    summary: `
- Tests writing is intuitive. 
- Create robust integration tests or simple unit tests.
- Created complex workflows. 
- Easily adapted to TDD.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${React}`]: <ToolDataDto>{
    displayName: "React",
    years: 6,
    projects: getProjectListForTool(React),
    summary: `
- Used react extensively building complex ecosystems. 
- Well versed in react context state vs app state.
- React class components and lifecycle components. 
- Fetching data asynchronously.
- React hooks, custom hooks, conditonal rendering, complex routing strategies, server components, fetch (react 18), suspense and useTransition. 
      `,
    proficiency: ToolProficiencyEnum.expert,
  },
  [`${Redux}`]: <ToolDataDto>{
    displayName: "Redux",
    years: 6,
    projects: getProjectListForTool(Redux),
    summary: `
- Experience standing up, bootstrapping and maintaining redux store.
- Connect redux store to saga middlewhere.
- Use saga action to hydrate Redux for api actions.
- Use reducer actions for hydtratng redux form state.
- Save to session storage.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${REST}`]: <ToolDataDto>{
    displayName: "REST",
    years: 8,
    projects: getProjectListForTool(REST),
    summary: `
- Many years building out restful routes.
- Exposing and consuming API routes.
- Making requests from clients and handling responses.
- Intercepting requests and responses to manange headers and error messaging. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Rollupjs}`]: <ToolDataDto>{
    displayName: "Rollup.js",
    years: 1.5,
    projects: getProjectListForTool(Rollupjs),
    summary: `
- Built the libraries for Platform UI with rollup.
- Very straightforward. Was building what I needed quickly.
`,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${S3}`]: <ToolDataDto>{
    displayName: "S3",
    years: 1.5,
    projects: getProjectListForTool(S3),
    summary: `
- Deployed static websites to S3 private buckets exposed through cloudfront.
- Built S3 bucket and configured authorization rules.
- Built out workflow to deploy to bucket.
`,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Sass}`]: <ToolDataDto>{
    displayName: "SASS",
    years: 6,
    projects: getProjectListForTool(Sass),
    summary: `
- Built out styles.
- Creeate Mixins.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Storybook}`]: <ToolDataDto>{
    displayName: "Storybook",
    years: 1.9,
    projects: getProjectListForTool(Storybook),
    summary: ` 
- Deployed storybook instance to a github page for easy to access view of common items.
- Building storybook components is a little cumbersome intiially.
- Once component is stood up its easy to maintain.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Sql_server}`]: <ToolDataDto>{
    displayName: "Sql Server",
    years: 7,
    projects: getProjectListForTool(Sql_server),
    summary: `
- Chained stored procedures.
- Built tables with indexs, foreign keys, primaray keys. 
- Understand referential table patterns: Lookup tables. 
- Understand why sql relational database my not always be the best choice.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Tailwindcss}`]: <ToolDataDto>{
    displayName: "Tailwindcss",
    years: 1.9,
    projects: getProjectListForTool(Tailwindcss),
    summary: `
- Powerful out of the box styling.
- Easy to override and customize. 
- Dymanic styling is verbose.
    `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Terraform}`]: <ToolDataDto>{
    displayName: "Terraform",
    years: 2,
    projects: getProjectListForTool(Terraform),
    summary: `
- Minimal experience. Mostly just wrote commands to a repo with terraform syntax.
- Seemed like defining scheme values for a script.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${TypeScript}`]: <ToolDataDto>{
    displayName: "Typescript",
    years: 6,
    projects: getProjectListForTool(TypeScript),
    summary: `
- Strong typing of javascript.
- Perfer strongly typed code.
- Use complex typing patterns.
- Makes code more maintainable.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Ubuntu}`]: <ToolDataDto>{
    displayName: "Ubuntu",
    years: 0.2,
    projects: getProjectListForTool(Ubuntu),
    summary: `
- Created ubuntu servers for Crypto mining and hosting this application.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${VBNet}`]: <ToolDataDto>{
    displayName: "VB.Net",
    years: 3,
    projects: getProjectListForTool(VBNet),
    summary: `
- Maintained aspx webpages.
- Create MVC interactions. 
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Web_performance}`]: <ToolDataDto>{
    displayName: "Web Performance",
    years: 5,
    projects: getProjectListForTool(Web_performance),
    summary: `
- Always web performance.
- Re-renders, data fetches, lazy loading and more to ensure users have a crisp experience.
- Microfrontend concepts.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Webpack}`]: <ToolDataDto>{
    displayName: "Webpack",
    years: 5,
    projects: getProjectListForTool(Webpack),
    summary: `
- Bootstrapped my own webpack application.
- Overwrite existing webpack configuations.
- Create webpack module federation remotes and hosts.
- Integrate module federation in an enterpise context.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
  [`${Xml}`]: <ToolDataDto>{
    displayName: "XML",
    years: 5,
    projects: getProjectListForTool(Xml),
    summary: `
- Capture and debug xml soap requests.
- Create software to process XML SOAP requests.
      `,
    proficiency: ToolProficiencyEnum.intermediate,
  },
  [`${Yaml}`]: <ToolDataDto>{
    displayName: "Yaml",
    years: 1.9,
    projects: getProjectListForTool(Yaml),
    summary: `
- build command scripts for github actions.
- build command scripts for dockup compose.
      `,
    proficiency: ToolProficiencyEnum.professional,
  },
};
