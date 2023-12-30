export interface ToolDataDto {
  displayName: string;
  years: number; 
  projects: ProjectType[];
  summary: string;
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
  urlList: string[]
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
const CHRobinson = 'C.H Robinson worldwide';
const Delhivery = 'Delhivery';
const Tcimpidis = 'Tcimpidis';

export type CompanyType = typeof CHRobinson 
 | typeof Delhivery 
 | typeof Tcimpidis;

export type CompanyMap = {
  [key in CompanyType]: CompanyDataDto;
};
  
/* Project Names */
const CustomerSignUpUI = 'getos1_signup';
const OrganizationUI = 'organization_ui';
const MarketplaceUI = 'marketplace_ui';
const DeveloperPortal =  'developer_portal';
const ConsoleUI = 'console_ui';
const FreightQuote =  'freightquote_by_chr';
const CHRobinsonOnline =  'navisphere_online';
const Portfolio = 'tcimpidis.com';
const TMC = "tmc";
const Personal = 'personal';

export type ProjectType = 
  typeof CustomerSignUpUI |
  typeof MarketplaceUI |
  typeof DeveloperPortal |
  typeof FreightQuote |
  typeof CHRobinsonOnline |
  typeof Portfolio | 
  typeof TMC |
  typeof Personal | 
  typeof ConsoleUI | 
  typeof OrganizationUI;

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
const Cypress = "cypress";
const Docker = "Docker";
const Dot_net_core = "dot-net-core";
const Figma = "figma";
const Git_bash = "git-bash";
const Github = "github";
const Google_analytics = "google-analytics";
const HTML5 = "HTML5";
const JavaScript = "JavaScript";
const Jenkins = "Jenkins";
const Jest ="Jest";
const Kafka ="kafka";
const Kubernetes = "kubernetes";
const Launchdarkly = "launchdarkly";
const Lerna = "lerna";
const Linux = "linux";
const Microsoft_azure = "microsoft-azure";
const Mongodb = "mongodb";
const MySql = "MySql";
const Next_js = "Next-js";
const Node_js = "node-js";
const NPM = "NPM";
const Oauth = "oauth";
const OWASP = "OWASP";
const PlatformUI = "platform_ui";
const Powershell = "powershell";
const Protractor =  "protractor";
const React_hook_form = "react-hook-form";
const React_query =  "react-query";
const React_testing_library = "react-testing-library";
const React = "react";
const Redux = "redux";
const REST = "REST";
const Rollupjs =  "rollupjs"; 
const S3 = "S3";
const Sass ="sass";
const Storybook = "storybook";
const Sql_server = "sql-server";
const Styled_Components = "Styled-Components";
const Tailwindcss = "tailwindcss"
const Terraform = "terraform";
const TypeScript = "TypeScript";
const Ubuntu = "ubuntu";
const VBNet = "VBNet";
const Web_performance = "Web-Performance";
const Webpack = "webpack"
const Xml = "xml";
const Yaml = "yaml";

export type ToolType = typeof Agile 
 |typeof Angular 
 |typeof Apache 
 |typeof Aws_cloudfront 
 |typeof Azure_devops
 |typeof CSharp 
 |typeof CSS_Modules 
 |typeof CSS3 
 |typeof Cypress 
 |typeof Docker 
 |typeof Dot_net_core
 |typeof Figma 
 |typeof Git_bash 
 |typeof Github 
 |typeof Google_analytics 
 |typeof HTML5 
 |typeof JavaScript 
 |typeof Jenkins 
 |typeof Jest 
 |typeof Kafka 
 |typeof Kubernetes 
 |typeof Launchdarkly 
 |typeof Lerna 
 |typeof Linux
 |typeof Microsoft_azure 
 |typeof Mongodb 
 |typeof MySql 
 |typeof Next_js 
 |typeof Node_js 
 |typeof NPM 
 |typeof Oauth 
 |typeof OWASP
 |typeof PlatformUI
 |typeof Powershell
 |typeof Protractor 
 |typeof React_hook_form 
 |typeof React_query   
 |typeof React_testing_library 
 |typeof React 
 |typeof Redux 
 |typeof REST 
 |typeof Rollupjs 
 |typeof S3 
 |typeof Sass 
 |typeof Storybook 
 |typeof Sql_server 
 |typeof Styled_Components 
 |typeof Tailwindcss 
 |typeof Terraform 
 |typeof TypeScript 
 |typeof Ubuntu
 |typeof VBNet 
 |typeof Web_performance 
 |typeof Webpack 
 |typeof Xml 
 |typeof Yaml;

export type ToolMap = {
  [key in ToolType]: ToolDataDto;
};

export const CompanyNames: CompanyType[] = [
  CHRobinson,
  Delhivery,
  Tcimpidis
]

export const ProjectNames: ProjectType[] = [
  CustomerSignUpUI,
  MarketplaceUI,
  DeveloperPortal,
  FreightQuote,
  CHRobinsonOnline,
  Portfolio,
  TMC,
  Personal
]

export const ToolsList: ToolType[] = [
  Agile,
  Angular,
  Apache,
  Aws_cloudfront,
  Azure_devops,
  CSharp,
  CSS_Modules,
  CSS3,
  Cypress,
  Docker,
  Dot_net_core,
  Figma,
  Git_bash,
  Github,
  Google_analytics,
  HTML5,
  JavaScript,
  Jenkins,
  Jest,
  Kafka,
  Kubernetes,
  Launchdarkly,
  Linux,
  Lerna,
  Microsoft_azure,
  Mongodb,
  MySql,
  Next_js,
  Node_js,
  NPM,
  Oauth, 
  OWASP,
  PlatformUI,
  Protractor,
  Powershell,
  React_hook_form,
  React_query, 
  React_testing_library,
  React,
  Redux,
  REST,
  Rollupjs,
  S3,
  Sass,
  Storybook,
  Sql_server,
  Styled_Components,
  Tailwindcss,
  Terraform,
  TypeScript,
  Ubuntu,
  VBNet,
  Web_performance,
  Webpack,
  Xml,
  Yaml,
]

export const CompanyData: CompanyMap = {
  [`${CHRobinson}`]: <CompanyDataDto>{
    projects: [FreightQuote, TMC, CHRobinsonOnline],
    summary: `At C.H. Robinson I learned the foundations of builiding scalable softward. I was fortunate enough to be exposed to a very large technical network, where multiple, large, functional teams, worked in tandem, to deliver huge business initiatives, while maintaining their current running network, as this network was adapting to the new technical demands of the industry. I was introduced to older technologies, given just enough time to understanding them, then started seeing and implementing the uplift of these technologies into newer, scalable tech. I was also blessed with a patient and knowledgable mentor Chris Hince, whose guideance and support spurred my growth. Chris and I worked together  on an internal C.H. Robinson applciation for their yearly charity auctions. Which helped facilitate over $150,000 in charitable donations annually. This, and my varied other experiences at C.H. Robinson gave me opportunities to practice owning and developing technologies in a vary stable, growth centered enviornment.`,
    references: [
      {
        name: "Chris Hince",
        role: "Architect/Mentor",
        linkedIn: 'https://www.linkedin.com/in/chrishince'
      },
      {
        name: "John Holmen",
        role: "Manager",
        linkedIn: "https://www.linkedin.com/in/john-holmen-15725b26"
      },
      {
        name: "Carrie Drzewiecki",
        role: "Lead Product Manager",
        linkedIn: "https://www.linkedin.com/in/carriedrzewiecki"
      },
      {
        name: "Ryan Arhart",
        role: "UX Designer",
        linkedIn: "https://www.linkedin.com/in/ryan-arhart-26b21712"
      },
      {
        name: "Jack Hamby",
        role: "Software Engineer",
        linkedIn: "https://www.linkedin.com/in/jack-hamby-626ba7125"
      },
      {
        name: "Jim Rein",
        role: "Director Software Engineer",
        linkedIn: "https://www.linkedin.com/in/jim-rein-7030355"
      }
    ],
    type: CHRobinson
  },
  [`${Delhivery}`]: <CompanyDataDto>{
    projects: [CustomerSignUpUI, MarketplaceUI, DeveloperPortal, ConsoleUI],
    summary: "I worked at Delhivery for one year and nine months before the India based headquaters dissolved the US based team in early November 2023. It the first time I had to make real technical desicions. Where I had true ownership. I was the sole UI designer, developer, and architect for the commercialization branch of their SaaS product OS1. I was tasked with creating an ecosystem that would allow for common login and UX across multiple applications. To accomplish this I created an internal framework of two libraries. One for core function features. Such as Http interceptors, Oauth wrappers, and base contexts/providers. The other for common reuseable styles and components, from complex components like a generic payment widget, to simple components like common buttons and inputs. These libraries were used in four different websites hosted in the os1 domain. One of which is a micro-frontend. Since they share a domain, they share session, allowing each app to use their own instance of the same authed session. The frameworked worked well and was easy enough to work within, though a little tedious to maintain given the scope of the product. The feedback I received from managers, colueges, and the product team was always generally positive and I always hit my deadlines. Though I am quite proud of this work. I would have to say that the overall execution of the product was subpar. I believe I leaned into the reusability concerns of product too much intially, due to my lack of experience, and built out a complex UI network far beyond what the product actually needed. There were simpler, faster ways to accomplish the job. I just didn't know when I started. Great learning experience",
    references: [
      {
        name: "Derek Gordon",
        role: "Lead Engineer",
        linkedIn: "https://www.linkedin.com/in/gordon-derek"
      },
      {
        name: "Sam Schneider",
        role: "Architect",
        linkedIn: "https://www.linkedin.com/in/samaschneider"
      },
      {
        name: "Nathaniel Davidson",
        role: "Software Developer",
        linkedIn: "https://www.linkedin.com/in/nathanieldavidson"
      },
      {
        name: "Shreya Jivani",
        role: "Manager",
        linkedIn: "https://www.linkedin.com/in/shreya-jivani-6bb85378"
      },
      {
        name: "James Chainey",
        role: "Hiring Manager",
        linkedIn: 'https://www.linkedin.com/in/james-chainey-5673009'
      },
    ],
    type: Delhivery
  },
  [`${Tcimpidis}`]: <CompanyDataDto>{
    projects: [Portfolio, Personal],
    summary: "A look into this website, which is Tcimpidis' first foree into owning every step of the process. From design to server management. As well as some other public code examples from Jamin Tcimpidis, the found of Tcimpidis.",
    type: Tcimpidis
  },
}

export const ProjectData: ProjectMap = {
  [`${CustomerSignUpUI}`]: <ProjectDataDto>{
    title: "Customer Sign-up UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    overview: `Customer sign up step driven user interface for capturing a customer product, company, billing details and payment. Product specific screens for post purchase details. 
    `,
    specifications: `
- App is hosted in a sub route of a static site.
- Requires query params to render otherwise will redirect out of app to product site.
- App used Axios to connect with Node.js gateway api.
- Sign up process used Redis cached and validated form at each step.
- React providers keeping form state, router state, and browser router state synced. 
- Deployed through github actions to S3 bucket through cloudfront 
`,
    takeaways: `
- With this app I used react router with app state to maintain the form. This required that I solve managing form state (Current sign up step) with browser navigation buttons. Solving this was quite complex and I never was able to prioritize a solution that didn't require managing browser router state.
`,
    keyPoints: [
      'Product select screen',
      'Step driven user interface for capturing customer details',
      'Secure Credit Card transactions'
    ],
    importantUrls: [{
      name: "Website Url",
      urlList: ["https://getos1.com"]
    }],
    type: CustomerSignUpUI
  },
  [`${MarketplaceUI}`]: <ProjectDataDto>{
    title: "Marketplace UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    overview: `Marketplace is an app for platform users that enables them to manage their existing subscriptions, subscribe to new apps released on the Marketplace, and, if they have the right role, create subscriptions to their apps on behalf of their customers.`,
    specifications: `
- Developed with [Webpack](/?tool=${Webpack}#tool_detail) module-federation as a host app.
- Authed site requiring signup through the [Customer Sign Up UI](#${CustomerSignUpUI})
- App uses Axios wrapped with react-query to optimize data fetching. The Axios server connects to a Node.js gateway api.
- Checkout process with payment capture that leverages redis with form validation.
- View and pay invoices.
- Supports switching between user organizations.
- Deployed through github actions to S3 bucket through cloudfront.
- Modularization of sub domains in app -- Each route definied itself, its mounting component, and path, as well as a couple Platform UI specific parameters that allowed for seemless integration into the left navigation compoonent
`,
    takeaways: `
- Module frontend architecture of Platform UI was effective, even allowing the host app to route the child, however the mount was always a bit slow. Which brought down user experience
- Abstration of react context usage to Platform UI was effective.
- Oidc-context left something to be desired. Redirects weren't working as expected but I was not able to prioritize resolving.
`,
    keyPoints: [
      'Purchase, manage, and upgrade subcriptions',
      'Role enabled subscription creation for product owners',
      'View and manage billing details',
      'Host microfrontend'
    ],
    importantUrls: [{
      name: "Website Url",
      urlList: ['https://marketplace.getos1.com']
    }],
    type: MarketplaceUI
  },
  [`${OrganizationUI}`]: <ProjectDataDto>{
    title: "Organization UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    overview: `Organiztion UI is an app for platform users to make changes to their organization. It is abstracted out into its own micro frontend so it can be used in both marketplace and developer portal.`,
    specifications: `
- Developed with [Webpack](?tool=${Webpack}#tool_detail) module-federation as a remote app.
- Authed site requiring signup through the [Customer Sign Up UI](#${CustomerSignUpUI}).
- App uses Axios wrapped with react-query to optimize data fetching. The Axios server connects to a Node.js gateway api.
- Suports file/image capture for company logo.
- Can run standalone with an active auth session and an organizaitonId query parameter. 
- Deployed through github actions to S3 bucket through cloudfront.
- Consumed by [MarketplaceUI](#${CustomerSignUpUI})`,
    takeaways: `
- Business ask that never really was used as intended. 
- Ended up being somewhat tedious to maintain given the nature of its use. 
- Somewhat annoying to run locally as well.
- Really interesting technology that opens up a lot of possiblilties for hosting sub apps 
- Curious to see if something similiar could be implemented in next.js.
`,
    keyPoints: [
      'View and manage organization details',
      'Remote microfronted',
    ],
    importantUrls: [{
      name: "Website Url",
      urlList: ['https://marketplace.getos1.com/organization']
    }],
    type: OrganizationUI
  },
  [`${DeveloperPortal}`]: <ProjectDataDto>{
    title: "Developer Portal UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    overview: `Developer portal is a hub for developers that want to build apps within the OS1 ecosystem. With the intention of sellion those apps to users on the marketplaces. Apps can be packaged in groups and sold as solutions, or be developed in isolation with the intention of be used by many solutions.`,
    specifications: `
- Developed with [Webpack](?tool=${Webpack}#tool_detail) module-federation as a host app.
- Authed site requiring signup through its own login portal.
- App uses Axios for data fetching. The Axios server connects to a Node.js gateway api.
- Create organizations and add developers to an organization. 
- Deployed through github actions to S3 bucket through cloudfront.`,
    takeaways: `
- I built this with inital specs but we ended up downsizing pretty rapidly. This a bit over abstracted. Having all of these pieces in a single repo would have ended up being better. 
- Platform UI base components and context worked well and I was please with the integration since Developer Portal ended up being deprioritized and therefore it wasn't kept up to date with Platform UI changes.
    
`,
    keyPoints: [
      'Create and manage developer organizations and teams',
      'View and test developer APIs',
      'Setup developer sandbox',
    ],
    importantUrls: [{
      name: "Website Url",
      urlList: ['https://developer.getos1.com']
    }],
    type: DeveloperPortal
  },
  [`${ConsoleUI}`]: <ProjectDataDto>{
    title: "Console UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    overview: `Console UI is an npm package that users pull down to create apps that are bootstrapped to integrate with a existing internal solution that is available on the marketplace. It is intended to facilitate login and accessibility to an instance of a purchased app or solution.`,
    specifications: `
- Monorepo built with lerna
- Exposes a [webpack](#${Webpack}) module fedeation remote module for apps that what to integrate to consume.
- Built in react
- Exposes an Axios client with predefined headers for data fetching. 
- Exposes function for pulling apps associated with user`,
    takeaways: `
- I took over responsibility of this app well after it was already deployed and in use. I felt there were issues with what was being exposed/how it was intended to be used vs how it was use.
- There seemed to not be good enough communication on inital development between the teams using it and the team who had built it. I had put some effort into getting it to work, but in the end there were some real issues with consuming the module as intended in a Next.js app, which happened to be technology the consuming team was using.
- I learned a lot about module federation and how to use it in Next.js through this project.   
`,
  keyPoints: [
    'Light authentication header',
    'Connects users to a product developed within developer portal',
    'View and navigate to product apps',
  ],
  type: ConsoleUI
  },
  [`${FreightQuote}`]: <ProjectDataDto>{
    title: "FreightQuote by CHR",
    tech: [
      Agile, TypeScript, CSS3, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, Google_analytics, HTML5, JavaScript, Node_js, Launchdarkly, CSharp, Docker, Dot_net_core, Figma, Terraform, OWASP, Sql_server
    ],
    overview: `FreightQuote by CHR is an app that strives to deliver FreightQuote by CHR's vast carrier network to infrequent shippers. If offers free instant quotes on shipments, and then will bring users who sign up through creating an order.`,
    specifications: `
- Greenfield project. When I joined we had just went live and hadn't captured more than 10 orders.
- Built in the newest C.H. Robinson technologies: 
  - React frontend, 
  - Servicestack .net core gateways, microservicees, and kafka producers/consumers
  - full devops pipeline with unit and e2e quality gates.
- Had to work across functional domains to delivery FreightQuote business needs.`,
    takeaways: `
- I was given a chance to have a lot of ownership with many projects while on this team. Most notably a B2B integration with twilio for managing uesr sms alters. One of the first times I got to develop an event based interation instead of pure api calls or older SOAP or Biztalk requests.
- Another notable project was the decomposition initiative that I spearheaded and potitioned our leadership group to prioritize.
  - App deployment was getting bogged down with end to end tests. The Application started managing so many tasks and if any of them failed during deployment, the entire deployment would fail. There were times where we'd lose a week of deliverables due to these bottlenecks.
  - With this I lead a micro-site initiative. Where we spilt the ui into funcitonal pieces and extended the domain so we could route each functional piece to its own url while sharing local and session (auth) storage.
`,
  keyPoints: [
    'Collect minimal data to show users instant free quotes',
    'Create users and manage billing details',
    'Email and text notification/tracking',
    'Create and manage orders',
    'Secure payment management'
  ],
  importantUrls: [{
    name: "Website Url",
    urlList: ['https://freightquote.com/book']
  }],
  type: FreightQuote
  },
  [`${TMC}`]: <ProjectDataDto>{
    title: "TMC a Division of C.H. Robinson ",
    tech: [
      Agile, CSS3, REST, HTML5, JavaScript, CSharp, VBNet, Microsoft_azure, React, Angular, Webpack, Sql_server, Xml, Microsoft_azure, Github, Git_bash
    ],
    overview: `TMC is a division of robinson that offers robinsons platform as a service to large scale customers. These are customers that have their own relationships with carriers and want to have a single UI to manage all of their logistics.`,
    specifications: `
- No longer worked within one functional domain. Instead had to deliver business initiatives across the entire chrobinson system. 
- Worked with many teams, in many different code bases, with different deployment prototcals and legacy technologies.
- Requrired doing in-depth techincal analysis across all of Robinson systems. 
- Own and track deployment progress across the other systems. `,
    takeaways: `
- As I was working in this role C.H. Robinson was going through technical uplifts. Moving away from legacy deployment stratigies and legacy tech. I was introduced to so many different process in this role.
- Towards the end of the role the team built a branch in Poland. I had to learn how to mentor and work with engineers in differnt time zones. I was even brought to Poland to train their developers in C.H. Robinson systems.
- I worked within TMC for about three years before I tranistioned to Freightquote by CHR.`,
  keyPoints: [
    'Deliver large initiatives across many products',
    'Work in various code bases managing all aspects of the logistic pipeline',
    'Work in a variety of technologies',
  ],
  type: TMC
  },
  [`${CHRobinsonOnline}`]: <ProjectDataDto>{
    title: "Navisphere Online",
    tech: [
      Agile, CSS3, REST, HTML5, JavaScript, CSharp, VBNet, Microsoft_azure, Sql_server, Xml
    ],
    overview: `Navisphere Online is a portal for robinson customers to interact with Robinson's large network of carriers to ship freight. Navipshere Online's services are used by large scale distributors that do not ab adequate freight fleet to meet their demands.`,
    specifications: `
- VB.Net and C# MVC with sql backend.
- Legacy interactions with many functions and aggregations living in the data layer
- Visual studio version control
- Manual deployments had to be staged across the various enviroments with Prod deployments happening usually once a  month.
- The responsibilities extended to the Navisphere Trucks and Wearhouse applications. All with the same tech`,
    takeaways: `
- ChrobinsonOnline was the first posting I held after graduating from my bootcamp. I was here as an apprentice and worked with my mentor to deliver enchancements and bug fixes across the stack.
- A little over 9 months into this role, the team was reconsontructed and I started working with for the [TMC](#${TMC}) business instead of just NavisphereOnline.
    `,
    keyPoints: [
      'legacy VB.Net product that was being uplifted',
      'Deep SQL stored procedure logic',
      'Legacy deployment release process',
    ],
    type: CHRobinsonOnline
  },
  [`${Portfolio}`]: <ProjectDataDto>{
    title: "jamin.tcimpidis.com",
    tech: [
      TypeScript, React, Jest, Git_bash, Github, React_testing_library, HTML5, JavaScript, Node_js, Yaml, Next_js, CSS_Modules, Apache, Ubuntu, Linux
    ],
    overview: `jamin.tcimpidis.com is the location of the Tcimpidis brand technical consulting firm. It currenly is jsut forming and only has the creator and founder as a developer. The domain is currently being used a excibition to showcase the Tcimpidis' experience, talents and serve as foundation for the Tcimpidis brand in the future. 
    `,
    specifications: `
- Built in Next.js
- There is no api. All data is static and served locally. This decision was based on cost and time.
- Using Css modules instead of tailwind
- Typescript
- Deployed through secure ssh script to apache ubunto server.
- Currently served as a static site, not a container.`,
    takeaways: `
- Finding next.js to be interesting to work with. The AppRouter demands enforce a folder structure that I find easy to work with. Plust there are a lot of performance wins you get without have to think about. Really responsive thus far.
- Tcimpidis.com isn't only a website. It also is a github repo that currently is has a couple of public pieces that showcase some of Tcimpidis' work.  
    `,
    importantUrls: [{
      name: "Github repo",
      urlList: ['https://github.com/tcimpidis/portfolio']
    }],
    keyPoints: [
      'Creator designed and developed',
      'Next.js server components',
      'Ubuntu VPS with Nginx reverse proxy',
    ],
    type: Portfolio
  },
  [`${Personal}`]: <ProjectDataDto>{
    title: "Personal projects",
    tech: [
      TypeScript, React, Jest, Git_bash, Github, React_testing_library, HTML5, JavaScript, Node_js, Yaml, Next_js, CSS_Modules, Apache, Ubuntu, Linux
    ],
    overview: `Aside from Tcimpidis' repos, there's the Jamin Tcimpidis repos, and code sandbox where more code examples can be found.`,
    keyPoints: [
      'Coding challenges',
      'Repositories'
    ],
    importantUrls: [{
      name: "Jamin's repo",
      urlList: ['https://github.com/JaminTcimpidis']
    },{
      name: "Code sandbox challenges", 
      urlList: [
        'https://codesandbox.io/p/sandbox/number-counter-hsnmz7',
        'https://codesandbox.io/p/devbox/crypto-converter-ch3v7z',
        'https://codesandbox.io/p/sandbox/capture-the-flag-nzf5vw',
      ]
    }],
    type: Personal
  }
}

const getProjectListForTool = (tool: ToolType) => {
  const projectsThatUseTool = Object.keys(ProjectData).filter((key) => ProjectData[key as ProjectType].tech.includes(tool));
  return projectsThatUseTool as ProjectType[];
}

export const ToolData : ToolMap = {
  [`${Agile}`]: <ToolDataDto>{
      displayName: "Agile Methodology",
      years: 8.5,
      projects: getProjectListForTool(Agile),
      summary: `
- Experience with one and two week sprints.
- Engaged in all ceremony: Grooming, Planning, Standup and Retro.
- Used tools like Jira, Azure, and trello to track work.
- Reflected on burn down metrics to improve productivity.
`
    },
    [`${Angular}`]: <ToolDataDto>{
      displayName: "Angular",
      years: 2.5,
      projects: getProjectListForTool(Angular),
      summary:`
- Built a site using original angularJS many years ago.
- Have worked a little with angular4, also many years ago.
- In general moved away from angular towards more library driven software.
`,
    },
    [`${Apache}`]: <ToolDataDto>{
      displayName: "Apache",
      years: .2,
      projects: getProjectListForTool(Apache),
      summary:`
- Used apache servers for crypto mining GPUs many many years ago, before I was a software engineer
- This site is currently hosted on a apache server
- This server is https and routed through a domain which all had to be configued on the apache server.
      `,
    },
    [`${Aws_cloudfront}`]: <ToolDataDto>{
      displayName: "Aws Cloudfront",
      years: 1.5,
      projects: getProjectListForTool(Aws_cloudfront),
      summary:`
- I've had to use cloudfront urls to path into S3 buckets
- Deployed to S3 through cloudfront using github actions
- Configure cloudfront origins 
      `,
    },
    [`${Azure_devops}`]: <ToolDataDto>{
      displayName: "Azure Devops",
      years: 2.5,
      projects: getProjectListForTool(Azure_devops),
      summary: `
- managed deployement secrets
- created project configurations
- built and managed azure pipelines
      `,
    },
    [`${CSharp}`]: <ToolDataDto>{      
      displayName: "C#",
      years: 7,
      projects: getProjectListForTool(CSharp),
      summary:`
- I have extensive use of C# as a server language. With some legacy Razor MVC experince.
- Very famility with C# OOP principles and concepts for code abstractions.
- Familiar with Dependency injections, Ienumerable, Ilist, and other linq extensions. 
- Many years experience developing in Visual Studio with advanced proficiency of the tool.
      `,
    },
    [`${CSS_Modules}`]: <ToolDataDto>{
      displayName: "CSS Modules",
      years: .5,
      projects: getProjectListForTool(CSS_Modules),
      summary:`
- I've only worked with CSS mondules within this project.
- So far I find them clean and easy to use. 
      `,
    },
    [`${CSS3}`]: <ToolDataDto>{
      displayName: "CSS3",
      years: 8.5,
      projects: getProjectListForTool(CSS3),
      summary:`
- I've had to use css for many things throughout the years but I am still learning more each day
- My experience with it, unti recently, had always been one of necessity. Trying to solve a problem instead of design a solution
- Still have work to do with creating scalable css designs
      `,
    },
    [`${Cypress}`]: <ToolDataDto>{
      displayName: "Cypress",
      years: .1,
      projects: getProjectListForTool(Cypress),
      summary:`
- Only worked with a few tests that had been built by someone else
- Testing seemed straightforward enough.
      `,
    },
    [`${Docker}`]: <ToolDataDto>{
      displayName: "Docker",
      years: 4,
      projects: getProjectListForTool(Docker),
      summary:`
- Very firm understanding of the concept behind docker, containerization, and the idea of hosting a self sustaining container on a server.
- Once containerization is understood docker is pretty straight forward.
- The biggest area of improvement for myself would be container security, but that may be more of a network issue than a container issue. 
      `,
    },
    [`${Dot_net_core}`]: <ToolDataDto>{
      displayName: "Dot net core",
      years: 4,
      projects: getProjectListForTool(Dot_net_core),
      summary: `
- Most of the projects I built were created off of a template. 
- I understood, updated, and built a few apps at the config level but for the most part it wasn't necessary. 
- My expertice in .net core is coupled with C#, servicestack, and kafka. 
      `,
    },
    [`${Figma}`]: <ToolDataDto>{
      displayName: "Figma",
      years: 4,
      projects: getProjectListForTool(Figma),
      summary: `
- Used from a developer perspective to obtain specs
- Would love to build a story book to figma library but have yet to have that experience.
      `,
    },
    [`${Git_bash}`]: <ToolDataDto>{
      displayName: "Git Bash",
      years: 7,
      projects: getProjectListForTool(Git_bash),
      summary:`
- Use git command line exclusively when interacting with github 
- Can create repos, push, update, rebase, merge and manage upstream from cli
      `,
    },
    [`${Github}`]: <ToolDataDto>{
      displayName: "Github",
      years: 7,
      projects: getProjectListForTool(Github),
      summary:`
- Most of my version control experience has been done on github
- Very familiar with branching strategies for deployment management and redundancy
- Manage repo and organization secrets 
- Create, configure, and authorize sso keys for push/pull security
- Define and enfore branch rules
      `,
    },
    [`${Google_analytics}`]: <ToolDataDto>{
      displayName: "Google Analytics",
      years: 4,
      projects: getProjectListForTool(Google_analytics),
      summary:`
- Create and pushed events to a system managed by someone else.
- Mostly just ensuring we were firing the right event names with the right payload.
      `,
    },
    [`${HTML5}`]: <ToolDataDto>{
      displayName: "HTML 5",
      years: 8.5,
      projects: getProjectListForTool(HTML5),
      summary:`
- Understand most html elements and their proper usages. 
- Have not done any indepth HTML learning. Most of the usage is within other front libraries or frameworks. Likd JSX.
      `,
    },
    [`${JavaScript}`]: <ToolDataDto>{
      displayName: "JavaScript",
      years: 8.5,
      projects: getProjectListForTool(JavaScript),
      summary:`
- Used VB.net and C# MVC applciations. Using jquery scripts to maninuplate client objects and make async server requests.
- Used in Angular projects.
- Used in React projects.
- Used in Node API projects.
- Familiar with JavaScript global hoisting, generator functions and asyncronisity. 
      `,
    },
    [`${Jenkins}`]: <ToolDataDto>{
      displayName: "Jenkins",
      years: 4,
      projects: getProjectListForTool(Jenkins),
      summary:`
- Deployed with jenkins through devOps
- Used UI to triage build failures
- Rarely configured any builds
      `,
    },
    [`${Jest}`]: <ToolDataDto>{
      displayName: "Jest",
      years: 5,
      projects: getProjectListForTool(Jest),
      summary:`
- All react and angular unit testing I've wrote has leveraged jest.
- Very familiary with making jest mocks both of local files and npm modules. 
- Know how to mock hooks, api calls, and other depenedencies
- Know how to write tests so that mocks run the same every time and aren't doubled up unexpectedly
- Write chain tests when the situation calls for it.
      `,
    },
    [`${Kafka}`]: <ToolDataDto>{
      displayName: "Kafka",
      years: 2,
      projects: getProjectListForTool(Kafka),
      summary:`
- Build consumers and producers mostly with .net core.
- Have deep understanding of core kafka features such as partitioning consumers and initializing with scalablity settings. 
- Understand how to setup event workflows with kafka for message redudancy.
- Have designed event driven workflows with Kafka
      `,
    },
    [`${Kubernetes}`]: <ToolDataDto>{
      displayName: "Kubernetes",
      years: 3,
      projects: getProjectListForTool(Kubernetes),
      summary:`
- Only worked with kubermetes cli to view and debug issues with containers in the cluster
- Have not managed and kubernetes clusters or side car configurations
      `,
    },
    [`${Launchdarkly}`]: <ToolDataDto>{
      displayName: "LaunchDarkly",
      years: 4,
      projects: getProjectListForTool(Launchdarkly),
      summary:`
- Utilized company launch darkly contract to create A/B test and feature flag pathways
- Useful for developing features without creating bottleneck
- Only configured within consuming application 
- Did not manage tokens or flags in anyway. Could only request to have flags created.  
      `,
    },
    [`${Lerna}`]: <ToolDataDto>{
      displayName: "lerna",
      years: 1,
      projects: getProjectListForTool(Lerna),
      summary:`
- Familiarity with creating a mono-repo that is self referencing.
- Create separate build pipelines for each package in mono-repo.
      `,
    },
    [`${Linux}`]: <ToolDataDto>{
      displayName: "Linux",
      years: 4,
      projects: getProjectListForTool(Linux),
      summary:`
- CRUD commands on files and directories.
- Update existing files with nano.
- update localhost proxys.
- ssh into other running programs.
      `,
    },
    [`${Microsoft_azure}`]: <ToolDataDto>{
      displayName: "Microsoft Azure",
      years: 3,
      projects: getProjectListForTool(Microsoft_azure),
      summary:`
- Connected github deployments to azure jobs.
- Managed secrets 
- Triage deployement issues
      `,
    },
    [`${Mongodb}`]: <ToolDataDto>{
      displayName: "MongoDB",
      years: 2,
      projects: getProjectListForTool(Mongodb),
      summary:`
- Proficent with MongoDB compass.
- Used document database for holding real-time data
- Consumers would listen from different kafka streams and write to DB. 
- Predefined queries optimized the document reads so they were efficient when read. 
      `,
    },
    [`${MySql}`]: <ToolDataDto>{
      displayName: "MySql",
      years: 1,
      projects: getProjectListForTool(MySql),
      summary:`
- Very little experience. Only used for a simple personal project I created that captured inputs" 
      `,
    },
    [`${Next_js}`]: <ToolDataDto>{
      displayName: "Next.js",
      years: 1,
      projects: getProjectListForTool(Next_js),
      summary:`
- Worked with next.js and module federation to try and get a host Next.js app to integrate with a none next remote.
- Had limited success. All implementations broke the existing routing of the app. 
- This website is built with Next.js As well. Been pretty happy with the experience using AppRouter. 
      `,
    },
    [`${Node_js}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 6,
      projects: getProjectListForTool(Node_js),
      summary:`
- Use node to run scripts from time to time.
- Understand asynchronous nature of a node server.
- Done minor work with Node Express apis and GRPC services
      `,
    },
    [`${NPM}`]: <ToolDataDto>{
      displayName: "NPM",
      years: 8.5,
      projects: getProjectListForTool(NPM),
      summary:`
- Extensive use of package managers.
- Know how to setup and maintain package.json.
- Build and deploy packages in npm. 
      `,
    },
    [`${Oauth}`]: <ToolDataDto>{
      displayName: "Oauth",
      years: 5,
      projects: getProjectListForTool(Oauth),
      summary:`
- Advanced understanding of Oauth principles and implementation.
- Integrate internal and exteranl auth providers,
- Manage auth across session and tabs.
      `,
    },
    [`${OWASP}`]: <ToolDataDto>{
      displayName: "OWASP",
      years: 3,
      projects: getProjectListForTool(OWASP),
      summary:`
- Firm understanding of security principels using OWASP guidelines.
- Build all products with OWASP principles in mind ensure company and user data is secure. 
`,
    },
    [`${PlatformUI}`]: <ToolDataDto>{
      displayName: "Platform UI Libraries",
      years: 1.9,
      projects: getProjectListForTool(PlatformUI),
      summary:`
- Platform UI is the grouping of libraries created to run the OS1 commercialization websites. 
- Plaform UI Core:
  - Single location for HTTP inteceptors, Oauth Provider, Microfrontend component, Configuration Provider, Axios Client generator and module.
  - Each Website implemented their own instance. not a singleton
- Platform UI Common: 
  - Large host of commonly used components. Buttons, Inputs, and some more complex items like state specific toggles, document upload components, and payment widget. 
  - Reused across all websites, singleton
`,
    },
    [`${Powershell}`]: <ToolDataDto>{
      displayName: "Powershell",
      years: 3,
      projects: getProjectListForTool(Powershell),
      summary:`
- When having to connect to docker or kubernetes from a windows machine I would usually user powershell
`,
    },
    [`${Protractor}`]: <ToolDataDto>{
      displayName: "Protractor",
      years: 4,
      projects: getProjectListForTool(Protractor),
      summary:`
- I worked with Protractor sporadically with the project that leveraged it. 
- There was a QA developer who wrote the tests.
- Occassionally I would update when making small changes.
- It was a good example of solid testing practices.
`,
    },
    [`${React_hook_form}`]: <ToolDataDto>{
      displayName: "React-hook-form",
      years: 6,
      projects: getProjectListForTool(React_hook_form),
      summary:`
- React hook form is a form management tool that offers a lot of form management and validation tools.
- I have used it extensively in all the projects I've built. 
- It is an amazing tool for managing complex validation challeges, specifically as form state begings to grow and create its own challenges.
`,
    },
    [`${React_query}`]: <ToolDataDto>{
      displayName: "React-Query",
      years: 1,
      projects: getProjectListForTool(React_query),
      summary:`
- Only have worked with this in a couple of websites but I really liked it
- Might be a bit obsolete with the way the industry is move. 
- Server side components accomplish all of the things this package does.
`,
    },
    [`${React_testing_library}`]: <ToolDataDto>{
      displayName: "React Testing library",
      years: 3,
      projects: getProjectListForTool(React_testing_library),
      summary:`
- Wonderful library for making robust integration tests or simple unit tests.
- Created complex workflows with this library. 
- Easily adapted to TDD.
`,
    },
    [`${React}`]: <ToolDataDto>{
      displayName: "React",
      years: 6,
      projects: getProjectListForTool(React),
      summary:`
- I've used react extensively building complex echosystems on its library. 
- Well versed in react context state vs app state.
- React class components and lifecycle compoents. 
- Connecting react data stores and asynchronously retriveing code.
- React hooks 
- Custom hooks 
- Conditonal rendering
- Complex routing strategies 
`,
    },
    [`${Redux}`]: <ToolDataDto>{
      displayName: "Redux",
      years: 6,
      projects: getProjectListForTool(Redux),
      summary:`
- Experience standing up, bootstrapping and maintaining redux store
- Connect redux store to saga middlewhere.
- Use saga action to hydrate Redux for api actions.
- Use reducer actions for hydtratng redux form state.
- Save to session storage.
`,
    },
    [`${REST}`]: <ToolDataDto>{
      displayName: "REST",
      years: 6,
      projects: getProjectListForTool(REST),
      summary:`
- Many years building out restful routes.
- Exposing and consuming API routes.
- Making requests from clients and handling responses. 
- Intercepting requests and responses to manange headers and error messaging. 
`,
    },
    [`${Rollupjs}`]: <ToolDataDto>{
      displayName: "Rollup.js",
      years: 1.5,
      projects: getProjectListForTool(Rollupjs),
      summary:`
- Built the libraries for Platform UI with rollup.
- Very straightforward. Was building what I needed quickly
`,
    },
    [`${S3}`]: <ToolDataDto>{
      displayName: "S3",
      years: 1.5,
      projects: getProjectListForTool(S3),
      summary:`
- Deployed static websites to S3 private buckets that were exposed via cloudfront.
- Built S3 bucket and configured authorization rules.
- Built out workflow to deploy to bucket
`,
    },
    [`${Sass}`]: <ToolDataDto>{
      displayName: "SASS",
      years: 6,
      projects: getProjectListForTool(Sass),
      summary:`
- Built out styles with sass for many projects
- Did not get deep into Mixins but I believe they are powerful tools for scalability.
      `,
    },
    [`${Storybook}`]: <ToolDataDto>{
      displayName: "Storybook",
      years: 1.9,
      projects: getProjectListForTool(Storybook),
      summary:`
- First worked with storybook at Delhivery. It's very cool, simple to use, and powerful. 
- Deployed storybook instance to a github page for easy to access view of common items. 
- Building storybook components does add some overhead but if you abstract it right you can boiler plate some things.
`,
    },
    [`${Sql_server}`]: <ToolDataDto>{
      displayName: "Sql Server",
      years: 7,
      projects: getProjectListForTool(Sql_server),
      summary:`
- Worked extesively with sql server. 
- Have had to chain together stored procedures to debug logic that was built in sql. 
- This type of sql shouldn't really be existing anymore but as a result I know what not to do. 
- Built tables with indexs, foreign keys, primaray keys. 
- Understand referentiail table patterns. Lookup tables. 
- Have context to why sql relational database my not always be the best choice.
`,
    },
    [`${Styled_Components}`]: <ToolDataDto>{
      displayName: "Styled Components",
      years: 2,
      projects: getProjectListForTool(Styled_Components),
      summary:`
- Have only worked with styled componenets a little bit and I found them to be to verbose for me. 
- Perhaps I didn't get into it enough. just didn't match my coding style. 
`,
    },
    [`${Tailwindcss}`]: <ToolDataDto>{
      displayName: "Tailwindcss",
      years: 1.9,
      projects: getProjectListForTool(Tailwindcss),
      summary:`
- Worked with tailwindcss extensively over the past two years. 
- Really powerful tool for smaller websites.
- As complexity grows maintaining styles can become cumbersome. 
- Dynamic styling is really verbose. You have to define the style string a build time so you cannot have style variables be defined while running. You can only define their visibility" 
`,
    },
    [`${Terraform}`]: <ToolDataDto>{
      displayName: "Terraform",
      years: 2,
      projects: getProjectListForTool(Terraform),
      summary:`
- Minimal experience. Mostly just wrote commands to a repo with terraform syntax.
- Seemed like defining scheme values for a script
`,
    },
    [`${TypeScript}`]: <ToolDataDto>{
      displayName: "Typescript",
      years: 6,
      projects: getProjectListForTool(TypeScript),
      summary:`
- Just strong typing of javascript
- As a C# developer first and foremost, strong typing is preferable.
- Will always opt for typescript. 
- Typescript is driving the data layer of this application. 
`,
    },
    [`${Ubuntu}`]: <ToolDataDto>{
      displayName: "Ubuntu",
      years: .2,
      projects: getProjectListForTool(Ubuntu),
      summary:`
- Only created ubuntu servers for Crypto mining and hosting this application
`,
    },
    [`${VBNet}`]: <ToolDataDto>{
      displayName: "VB.Net",
      years: 3,
      projects: getProjectListForTool(VBNet),
      summary:`
- Maintained many aspx webpages when I first started developing.
- Became well versed in creating MVC interactions through this technology. 
- Worked on expanding my understanding of abstraction by creating c# factories for selecting vb.net pages
`,
    },
    [`${Web_performance}`]: <ToolDataDto>{
      displayName: "Web Performance",
      years: 5,
      projects: getProjectListForTool(Web_performance),
      summary:`
- Consider web performance in all of my code building.
- Re-renders, data fetches, lazy loading and more to ensure users have a crisp experience. 
- Microfrontend concepts geared towards web performance.
`,
    },
    [`${Webpack}`]: <ToolDataDto>{
      displayName: "Webpack",
      years: 3,
      projects: getProjectListForTool(Webpack),
      summary:`
- Bootstrapped my own webpack application.
- Overwrite existing webpack configuations.
- Create webpack module federation remotes and hosts.
- Integrate module federation in an enterpise context
`,
    },
    [`${Xml}`]: <ToolDataDto>{
      displayName: "XML",
      years: 5,
      projects: getProjectListForTool(Xml),
      summary:`
- Capture and debug xml soap requests.
- Create software to process XML SOAP requests.
`,
    },
    [`${Yaml}`]: <ToolDataDto>{
      displayName: "Yaml",
      years: 1.9,
      projects: getProjectListForTool(Yaml),
      summary:`
- build command scripts for github actions.
- build command scripts for dockup compose.
      `,
    },
}

