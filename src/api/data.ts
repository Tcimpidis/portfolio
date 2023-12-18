export interface ToolDataDto {
  displayName: string;
  years: number; 
  projects: ProjectType[];
  summary: string;
}

export interface ProjectDataDto {
  title: string;
  tech: ToolType[];
  highlights: string;
  importantUrls?: ImportantUrl[];
}

export interface ImportantUrl {
  name: string;
  urlList: string[]
}

export interface CompanyDataDto {
  projects: ProjectType[];
}

/* Company Names */
const CHRobinson = 'C.H Robinson worldwide';
const Delhivery = 'Delhivery';
const Tcimpidis = 'Tcimpidis';

export type CompanyType = typeof CHRobinson 
 | typeof Delhivery 
 | typeof Tcimpidis;

type CompanyMap = {
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

type ProjectMap = {
  [key in ProjectType]: ProjectDataDto;
};
  

const Agile = "agile";
const Angular = "angular";
const Apache = "apache";
const Aws = "aws";
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
const IT_accessibility ="IT-Accessibility";
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
 |typeof Aws 
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
 |typeof IT_accessibility
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

type ToolMap = {
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
  Aws,
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
  IT_accessibility,
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
    projects: [FreightQuote, TMC, CHRobinsonOnline]
  },
  [`${Delhivery}`]: <CompanyDataDto>{
    projects: [CustomerSignUpUI, MarketplaceUI, DeveloperPortal, ConsoleUI]
  },
  [`${Tcimpidis}`]: <CompanyDataDto>{
    projects: [Portfolio, Personal]
  },
}

export const ProjectData: ProjectMap = {
  [`${CustomerSignUpUI}`]: <ProjectDataDto>{
    title: "Customer Sign-up UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: `
### Overview 
Customer sign up step driven user interface for capturing a customer product, company, billing details and payment. There are also product specific screens for post purchase details. 
###  Specifications 
- App is hosted in a sub route of a static site.
- Requires query params to render otherwise will redirect out of app to product site.
- App used Axios to connect with Node.js gateway api.
- Sign up process used Redis cached and validated form at each step.
- React providers keeping form state, router state, and browser router state synced. 
- Deployed through github actions to S3 bucket through cloudfront 
### Lessons
- With this app I used react router with app state to maintain the form. This required that I solve managing form state (Current sign up step) with browser navigation buttons. Solving this was quite complex and I never was able to prioritize a solution that didn't require managing browser router state.
`,
    importantUrls: [{
      name: "Website Url",
      urlList: ["https://getos1.com"]
    }]
  },
  [`${MarketplaceUI}`]: <ProjectDataDto>{
    title: "Marketplace UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: `
### Overview 
Marketplace is an app for platform users that enables them to manage their existing subscriptions, subscribe to new apps released on the Marketplace, and, if they have the right role, create subscriptions to their apps on behalf of their customers.   
###  Specifications 
- Developed with [Webpack](?tool=${Webpack}#tool_detail) module-federation as a host app.
- Authed site requiring signup through the [Customer Sign Up UI](#${CustomerSignUpUI})
- App uses Axios wrapped with react-query to optimize data fetching. The Axios server connects to a Node.js gateway api.
- Checkout process with payment capture that leverages redis with form validation.
- View and pay invoices.
- Supports switching between user organizations.
- Deployed through github actions to S3 bucket through cloudfront.
- Modularization of sub domains in app -- Each route definied itself, its mounting component, and path, as well as a couple Platform UI specific parameters that allowed for seemless integration into the left navigation compoonent 
### Takeaways
- Module frontend architecture of Platform UI was effective, even allowing the host app to route the child, however the mount was always a bit slow. Which brought down user experience
- Abstration of react context usage to Platform UI was effective.
- Oidc-context left something to be desired. Redirects weren't working as expected but I was not able to prioritize resolving.
`,
    importantUrls: [{
      name: "Website Url",
      urlList: ['https://marketplace.getos1.com']
    }]
  },
  [`${OrganizationUI}`]: <ProjectDataDto>{
    title: "Organization UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights:`
### Overview 
Organiztion UI is an app for platform users to make changes to their organization. It is abstracted out into its own micro frontend so it can be used in both marketplace and developer portal.
###  Specifications 
- Developed with [Webpack](?tool=${Webpack}#tool_detail) module-federation as a remote app.
- Authed site requiring signup through the [Customer Sign Up UI](#${CustomerSignUpUI}).
- App uses Axios wrapped with react-query to optimize data fetching. The Axios server connects to a Node.js gateway api.
- Suports file/image capture for company logo.
- Can run standalone with an active auth session and an organizaitonId query parameter. 
- Deployed through github actions to S3 bucket through cloudfront.
- Consumed by [MarketplaceUI](#${CustomerSignUpUI})
### Takeaways
- Business ask that never really was used as intended. 
- Ended up being somewhat tedious to maintain given the nature of its use. 
- Somewhat annoying to run locally as well.
- Really interesting technology that opens up a lot of possiblilties for hosting sub apps 
- Curious to see if something similiar could be implemented in next.js.
`,
importantUrls: [{
  name: "Website Url",
  urlList: ['https://marketplace.getos1.com/organization']
}]
  },
  [`${DeveloperPortal}`]: <ProjectDataDto>{
    title: "Developer Portal UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: `
### Overview 
Developer portal is a hub for developers that want to build apps within the OS1 ecosystem. With the intention of sellion those apps to users on the marketplaces. Apps can be packaged in groups and sold as solutions, or be developed in isolation with the intention of be used by many solutions.
###  Specifications 
- Developed with [Webpack](?tool=${Webpack}#tool_detail) module-federation as a host app.
- Authed site requiring signup through its own login portal.
- App uses Axios for data fetching. The Axios server connects to a Node.js gateway api.
- Create organizations and add developers to an organization. 
- Deployed through github actions to S3 bucket through cloudfront.
### Takeaways
- I built this with inital specs but we ended up downsizing pretty rapidly. This a bit over abstracted. Having all of these pieces in a single repo would have ended up being better. 
- Platform UI base components and context worked well and I was please with the integration since Developer Portal ended up being deprioritized and therefore it wasn't kept up to date with Platform UI changes.
`,
importantUrls: [{
  name: "Website Url",
  urlList: ['https://developer.getos1.com']
}]
  },
  [`${ConsoleUI}`]: <ProjectDataDto>{
    title: "Console UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights:`
### Overview 
Console UI is an npm package that users pull down to create apps that are bootstrapped to integrate with a existing internal solution that is available on the marketplace. It is intended to facilitate login and accessibility to an instance of a purchased app or solution.
###  Specifications 
- Monorepo built with lerna
- Exposes a [webpack](#${Webpack}) module fedeation remote module for apps that what to integrate to consume.
- Built in react
- Exposes an Axios client with predefined headers for data fetching. 
- Exposes function for pulling apps associated with user
### Summary
- I took over responsibility of this app well after it was already deployed and in use. I felt there were issues with what was being exposed/how it was intended to be used vs how it was use.
- There seemed to not be good enough communication on inital development between the teams using it and the team who had built it. I had put some effort into getting it to work, but in the end there were some real issues with consuming the module as intended in a Next.js app, which happened to be technology the consuming team was using.
- I learned a lot about module federation and how to use it in Next.js through this project.
`
  },
  [`${FreightQuote}`]: <ProjectDataDto>{
    title: "FreightQuote by CHR",
    tech: [
      Agile, TypeScript, CSS3, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, Google_analytics, HTML5, JavaScript, Node_js, Launchdarkly, CSharp, Docker, Dot_net_core, Figma, Terraform, OWASP, Sql_server
    ],
    highlights: `
### Overview 
FreightQuote by CHR is an app that strives to deliver FreightQuote by CHR's vast carrier network to infrequent shippers. If offers free instant quotes on shipments, and then will bring users who sign up through creating an order. 
###  Specifications 
- Greenfield project. When I joined we had just went live and hadn't captured more than 10 orders.
- Built in the newest C.H. Robinson technologies: 
  - React frontend, 
  - Servicestack .net core gateways, microservicees, and kafka producers/consumers
  - full devops pipeline with unit and e2e quality gates.
- Had to work across functional domains to delivery FreightQuote business needs.
### Summary
- I was given a chance to have a lot of ownership with many projects while on this team. Most notably a B2B integration with twilio for managing uesr sms alters. One of the first times I got to develop an event based interation instead of pure api calls or older SOAP or Biztalk requests.
- Another notable project was the decomposition initiative that I spearheaded and potitioned our leadership group to prioritize.
  - App deployment was getting bogged down with end to end tests. The Application started managing so many tasks and if any of them failed during deployment, the entire deployment would fail. There were times where we'd lose a week of deliverables due to these bottlenecks.
  - With this I lead a micro-site initiative. Where we spilt the ui into funcitonal pieces and extended the domain so we could route each functional piece to its own url while sharing local and session (auth) storage.
`,
importantUrls: [{
  name: "Website Url",
  urlList: ['https://freightquote.com/book']
}]
  },
  [`${TMC}`]: <ProjectDataDto>{
    title: "TMC a Division of C.H. Robinson ",
    tech: [
      Agile, CSS3, REST, HTML5, JavaScript, CSharp, VBNet, Microsoft_azure, React, Angular, Webpack, Sql_server, Xml, Microsoft_azure, Github, Git_bash
    ],
    highlights: `
### Overview 
TMC is a division of robinson that offers robinsons platform as a service to large scale customers. These are customers that have their own relationships with carriers and want to have a single UI to manage all of their logistics. 
###  Specifications 
- No longer worked within one functional domain. Instead had to deliver business initiatives across the entire chrobinson system. 
- Worked with many teams, in many different code bases, with different deployment prototcals and legacy technologies.
- Requrired doing in-depth techincal analysis across all of Robinson systems. 
- Own and track deployment progress across the other systems. 

### Summary
- As I was working in this role C.H. Robinson was going through technical uplifts. Moving away from legacy deployment stratigies and legacy tech. I was introduced to so many different process in this role.
- Towards the end of the role the team built a branch in Poland. I had to learn how to mentor and work with engineers in differnt time zones. I was even brought to Poland to train their developers in C.H. Robinson systems.
- I worked within TMC for about two and a half to three years before I tranistioned to Freightquote by CHR. 
`
  },
  [`${CHRobinsonOnline}`]: <ProjectDataDto>{
    title: "Navisphere Online",
    tech: [
      Agile, CSS3, REST, HTML5, JavaScript, CSharp, VBNet, Microsoft_azure, Sql_server, Xml
    ],
    highlights: `
### Overview 
Navisphere Online is a portal for robinson customers to interact with Robinson's large network of carriers to ship freight. Navipshere Online's services are used by large scale distributors that do not ab adequate freight fleet to meet their demands.
###  Specifications 
- VB.Net and C# MVC with sql backend.
- Legacy interactions with many functions and aggregations living in the data layer
- Visual studio version control
- Manual deployments had to be staged across the various enviroments with Prod deployments happening usually once a  month.
- The responsibilities extended to the Navisphere Trucks and Wearhouse applications. All with the same tech

### Summary
- ChrobinsonOnline was the first posting I held after graduating from my bootcamp. I was here as an apprentice and worked with my mentor to deliver enchancements and bug fixes across the stack.
- A little over 9 months into this role, the team was reconsontructed and I started working with for the [TMC](#${TMC}) business instead of just NavisphereOnline.
`
  },
  [`${Portfolio}`]: <ProjectDataDto>{
    title: "Tcimpidis.com",
    tech: [
      TypeScript, React, Jest, Git_bash, Github, React_testing_library, HTML5, JavaScript, Node_js, Yaml, Next_js, CSS_Modules, Apache, Ubuntu, Linux
    ],
    highlights:`
### Overview 
Tcimpidis.com is the location of the Tcimpidis brand technical consulting firm. It currenly is jsut forming and only has the creator and founder as a developer. The domain is currently being used a excibition to showcase the Tcimpidis' experience, talents and serve as foundation for the Tcimpidis brand in the future. 
###  Specifications 
- Built in Next.js
- There is no api. All data is static and served locally. This decision was based on cost and time.
- Using Css modules instead of tailwind
- Typescript
- Deployed through secure ssh script to apache ubunto server.
- Currently served as a static site, not a container.

### Summary
- Finding next.js to be interesting to work with. The AppRouter demands enforce a folder structure that I find easy to work with. Plust there are a lot of performance wins you get without have to think about. Really responsive thus far.
- Tcimpidis.com isn't only a website. It also is a github repo that currently is has a couple of public pieces that showcase some of Tcimpidis' work.  
`,
importantUrls: [{
  name: "Github repo",
  urlList: ['https://github.com/tcimpidis/portfolio']
}]
  },
  [`${Personal}`]: <ProjectDataDto>{
    title: "Personal projects",
    tech: [
      TypeScript, React, Jest, Git_bash, Github, React_testing_library, HTML5, JavaScript, Node_js, Yaml, Next_js, CSS_Modules, Apache, Ubuntu, Linux
    ],
    highlights:`
### Overview 
Aside from Tcimpidis' technical consulting and its repos, there's the Jamin Tcimpidis repos, and code sandbox where more code examples can be found.  
`,
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
}
]

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
      summary: '- Experience with one and two week sprints.\n\n- Engaged in all ceremony: Grooming, Planning, Standup and Retro.\n- Used tools like Jira, Azure, and trello to track work.\n - Reflected on burn down metrics to improve productivity.'
    },
    [`${Angular}`]: <ToolDataDto>{
      displayName: "Angular",
      years: 2.5,
      projects: getProjectListForTool(Angular),
      summary:'',
    },
    [`${Apache}`]: <ToolDataDto>{
      displayName: "Apache",
      years: .2,
      projects: getProjectListForTool(Apache),
      summary:'',
    },
    [`${Aws}`]: <ToolDataDto>{
      displayName: "AWS",
      years: 1.5,
      projects: getProjectListForTool(Aws),
      summary:'',
    },
    [`${Aws_cloudfront}`]: <ToolDataDto>{
      displayName: "Aws Cloudfront",
      years: 2.5,
      projects: getProjectListForTool(Aws_cloudfront),
      summary:'',
    },
    [`${Azure_devops}`]: <ToolDataDto>{
      displayName: "Azure Devops",
      years: 2.5,
      projects: getProjectListForTool(Azure_devops),
      summary:'',
    },
    [`${CSharp}`]: <ToolDataDto>{      
      displayName: "C#",
      years: 7,
      projects: getProjectListForTool(CSharp),
      summary:'',
    },
    [`${CSS_Modules}`]: <ToolDataDto>{
      displayName: "CSS Modules",
      years: .5,
      projects: getProjectListForTool(CSS_Modules),
      summary:'',
    },
    [`${CSS3}`]: <ToolDataDto>{
      displayName: "CSS3",
      years: 8.5,
      projects: getProjectListForTool(CSS3),
      summary:'',
    },
    [`${Cypress}`]: <ToolDataDto>{
      displayName: "Cypress",
      years: .1,
      projects: getProjectListForTool(Cypress),
      summary:'',
    },
    [`${Docker}`]: <ToolDataDto>{
      displayName: "Docker",
      years: 4,
      projects: getProjectListForTool(Docker),
      summary:'',
    },
    [`${Dot_net_core}`]: <ToolDataDto>{
      displayName: "Docker",
      years: 4,
      projects: getProjectListForTool(Dot_net_core),
      summary:'',
    },
    [`${Figma}`]: <ToolDataDto>{
      displayName: "Figma",
      years: 4,
      projects: getProjectListForTool(Figma),
      summary:'',
    },
    [`${Git_bash}`]: <ToolDataDto>{
      displayName: "Git Bash",
      years: 7,
      projects: getProjectListForTool(Git_bash),
      summary:'',
    },
    [`${Github}`]: <ToolDataDto>{
      displayName: "Github",
      years: 7,
      projects: getProjectListForTool(Github),
      summary:'',
    },
    [`${Google_analytics}`]: <ToolDataDto>{
      displayName: "Google Analytics",
      years: 4,
      projects: getProjectListForTool(Google_analytics),
      summary:'',
    },
    [`${HTML5}`]: <ToolDataDto>{
      displayName: "HTML 5",
      years: 8.5,
      projects: getProjectListForTool(HTML5),
      summary:'',
    },
    [`${IT_accessibility}`]: <ToolDataDto>{
      displayName: "IT Accessibility",
      years: 8.5,
      projects: getProjectListForTool(IT_accessibility),
      summary:'',
    },
    [`${JavaScript}`]: <ToolDataDto>{
      displayName: "JavaScript",
      years: 8.5,
      projects: getProjectListForTool(JavaScript),
      summary:'',
    },
    [`${Jenkins}`]: <ToolDataDto>{
      displayName: "Jenkins",
      years: 4,
      projects: getProjectListForTool(Jenkins),
      summary:'',
    },
    [`${Jest}`]: <ToolDataDto>{
      displayName: "Jest",
      years: 5,
      projects: getProjectListForTool(Jest),
      summary:'',
    },
    [`${Kafka}`]: <ToolDataDto>{
      displayName: "Kafka",
      years: 2,
      projects: getProjectListForTool(Kafka),
      summary:'',
    },
    [`${Kubernetes}`]: <ToolDataDto>{
      displayName: "Kubernetes",
      years: 3,
      projects: getProjectListForTool(Kubernetes),
      summary:'',
    },
    [`${Launchdarkly}`]: <ToolDataDto>{
      displayName: "LaunchDarkly",
      years: 4,
      projects: getProjectListForTool(Launchdarkly),
      summary:'',
    },
    [`${Lerna}`]: <ToolDataDto>{
      displayName: "lerna",
      years: 1,
      projects: getProjectListForTool(Lerna),
      summary:'',
    },
    [`${Linux}`]: <ToolDataDto>{
      displayName: "Linux",
      years: 4,
      projects: getProjectListForTool(Linux),
      summary:'',
    },
    [`${Microsoft_azure}`]: <ToolDataDto>{
      displayName: "Microsoft Azure",
      years: 3,
      projects: getProjectListForTool(Microsoft_azure),
      summary:'',
    },
    [`${Mongodb}`]: <ToolDataDto>{
      displayName: "MongoDB",
      years: 2,
      projects: getProjectListForTool(Mongodb),
      summary:'',
    },
    [`${MySql}`]: <ToolDataDto>{
      displayName: "MySql",
      years: 1,
      projects: getProjectListForTool(MySql),
      summary:'',
    },
    [`${Next_js}`]: <ToolDataDto>{
      displayName: "Next.js",
      years: 1,
      projects: getProjectListForTool(Next_js),
      summary:'',
    },
    [`${Node_js}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 6,
      projects: getProjectListForTool(Node_js),
      summary:'',
    },
    [`${NPM}`]: <ToolDataDto>{
      displayName: "Figma",
      years: 8.5,
      projects: getProjectListForTool(NPM),
      summary:'',
    },
    [`${Oauth}`]: <ToolDataDto>{
      displayName: "Oauth",
      years: 5,
      projects: getProjectListForTool(Oauth),
      summary:'',
    },
    [`${OWASP}`]: <ToolDataDto>{
      displayName: "OWASP",
      years: 3,
      projects: getProjectListForTool(OWASP),
      summary:'',
    },
    [`${PlatformUI}`]: <ToolDataDto>{
      displayName: "Platform UI Libraries",
      years: 1.9,
      projects: getProjectListForTool(PlatformUI),
      summary:'',
    },
    [`${Powershell}`]: <ToolDataDto>{
      displayName: "Powershell",
      years: 3,
      projects: getProjectListForTool(Powershell),
      summary:'',
    },
    [`${Protractor}`]: <ToolDataDto>{
      displayName: "Protractor",
      years: 4,
      projects: getProjectListForTool(Protractor),
      summary:'',
    },
    [`${React_hook_form}`]: <ToolDataDto>{
      displayName: "React-hook-form",
      years: 6,
      projects: getProjectListForTool(React_hook_form),
      summary:'',
    },
    [`${React_query}`]: <ToolDataDto>{
      displayName: "React-Query.",
      years: 1,
      projects: getProjectListForTool(React_query),
      summary:'',
    },
    [`${React_testing_library}`]: <ToolDataDto>{
      displayName: "React Testing library",
      years: 3,
      projects: getProjectListForTool(React_testing_library),
      summary:'',
    },
    [`${React}`]: <ToolDataDto>{
      displayName: "React",
      years: 6,
      projects: getProjectListForTool(React),
      summary:'',
    },
    [`${Redux}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 6,
      projects: getProjectListForTool(Redux),
      summary:'',
    },
    [`${REST}`]: <ToolDataDto>{
      displayName: "REST",
      years: 6,
      projects: getProjectListForTool(REST),
      summary:'',
    },
    [`${Rollupjs}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 1.5,
      projects: getProjectListForTool(Rollupjs),
      summary:'',
    },
    [`${S3}`]: <ToolDataDto>{
      displayName: "S3",
      years: 1.5,
      projects: getProjectListForTool(S3),
      summary:'',
    },
    [`${Sass}`]: <ToolDataDto>{
      displayName: "SASS",
      years: 6,
      projects: getProjectListForTool(Sass),
      summary:'',
    },
    [`${Storybook}`]: <ToolDataDto>{
      displayName: "Storybook",
      years: 1.9,
      projects: getProjectListForTool(Storybook),
      summary:'',
    },
    [`${Sql_server}`]: <ToolDataDto>{
      displayName: "Sql Server",
      years: 7,
      projects: getProjectListForTool(Sql_server),
      summary:'',
    },
    [`${Styled_Components}`]: <ToolDataDto>{
      displayName: "Styled Components",
      years: 2,
      projects: getProjectListForTool(Styled_Components),
      summary:'',
    },
    [`${Tailwindcss}`]: <ToolDataDto>{
      displayName: "Tailwindcss",
      years: 1.9,
      projects: getProjectListForTool(Tailwindcss),
      summary:'',
    },
    [`${Terraform}`]: <ToolDataDto>{
      displayName: "Terraform",
      years: 2,
      projects: getProjectListForTool(Terraform),
      summary:'',
    },
    [`${TypeScript}`]: <ToolDataDto>{
      displayName: "Typescript",
      years: 6,
      projects: getProjectListForTool(TypeScript),
      summary:'',
    },
    [`${Ubuntu}`]: <ToolDataDto>{
      displayName: "Ubuntu",
      years: .2,
      projects: getProjectListForTool(Ubuntu),
      summary:'',
    },
    [`${VBNet}`]: <ToolDataDto>{
      displayName: "VB.Net",
      years: 3,
      projects: getProjectListForTool(VBNet),
      summary:'',
    },
    [`${Web_performance}`]: <ToolDataDto>{
      displayName: "Web Performance",
      years: 5,
      projects: getProjectListForTool(Web_performance),
      summary:'',
    },
    [`${Webpack}`]: <ToolDataDto>{
      displayName: "Webpack",
      years: 3,
      projects: getProjectListForTool(Webpack),
      summary:'',
    },
    [`${Xml}`]: <ToolDataDto>{
      displayName: "XML",
      years: 5,
      projects: getProjectListForTool(Xml),
      summary:'',
    },
    [`${Yaml}`]: <ToolDataDto>{
      displayName: "Yaml",
      years: 1.9,
      projects: getProjectListForTool(Yaml),
      summary:'',
    },
}

