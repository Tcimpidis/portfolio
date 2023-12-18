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
  OverView: string;
  Specs: string;
  lessons: string;
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
`
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
- Developed with [Webpack module-federation](https://webpack.js.org/concepts/module-federation/) and is a host app.
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
`
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
`
  },
  [`${DeveloperPortal}`]: <ProjectDataDto>{
    title: "Developer Portal UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: ""
  },
  [`${ConsoleUI}`]: <ProjectDataDto>{
    title: "Console UI",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: ""
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
`
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
    highlights: ""
  },
  [`${Personal}`]: <ProjectDataDto>{
    title: "Personal projects",
    tech: [
      TypeScript, React, Jest, Git_bash, Github, React_testing_library, HTML5, JavaScript, Node_js, Yaml, Next_js, CSS_Modules, Apache, Ubuntu, Linux
    ],
    highlights:`
### Overview 
Marketplace is an app for platform users that enables them to manage their existing subscriptions, subscribe to new apps released on the Marketplace, and, if they have the right role, create subscriptions to their apps on behalf of their customers.   
###  Specifications 
- Developed with [Webpack module-federation](https://webpack.js.org/concepts/module-federation/) and is a host app.
- Authed site requiring signup through the [Customer Sign Up UI](#${CustomerSignUpUI})
- App uses Axios wrapped with react-query to optimize data fetching. The Axios server connects to a Node.js gateway api.
- Checkout process with payment capture that leverages redis with form validation.
- View and pay invoices.
- Supports switching between user organizations.
- Deployed through github actions to S3 bucket through cloudfront.

### Takeaways
- Module frontend architecture of Platform UI was effective, even allowing the host app to route the child, however the mount was always a bit slow. Which brought down user experience
- Abstration of react context usage to Platform UI was effective.
- Oidc-context left something to be desired. Redirects weren't working as expected but I was not able to prioritize resolving.
`
  }
}

export const ToolData : ToolMap = {
  [`${Agile}`]: <ToolDataDto>{
      displayName: "Agile Methodology",
      years: 8.5,
      projects: [CustomerSignUpUI, MarketplaceUI, DeveloperPortal, CHRobinsonOnline, FreightQuote],
      summary: '- Experience with one and two week sprints.\n\n- Engaged in all ceremony: Grooming, Planning, Standup and Retro.\n- Used tools like Jira, Azure, and trello to track work.\n - Reflected on burn down metrics to improve productivity.'
    },
    [`${Angular}`]: <ToolDataDto>{
      displayName: "Angular",
      years: 2.5,
      projects: [CHRobinsonOnline],
      summary:'',
    },
    [`${Apache}`]: <ToolDataDto>{
      displayName: "Apache",
      years: .2,
      projects: [Portfolio],
      summary:'',
    },
    [`${Aws}`]: <ToolDataDto>{
      displayName: "AWS",
      years: 1.5,
      projects: [CustomerSignUpUI,MarketplaceUI,DeveloperPortal],
      summary:'',
    },
    [`${Aws_cloudfront}`]: <ToolDataDto>{
      displayName: "Aws Cloudfront",
      years: 2.5,
      projects: [CustomerSignUpUI,MarketplaceUI,DeveloperPortal],
      summary:'',
    },
    [`${Azure_devops}`]: <ToolDataDto>{
      displayName: "Azure Devops",
      years: 2.5,
      projects: [TMC, CHRobinsonOnline],
      summary:'',
    },
    [`${CSharp}`]: <ToolDataDto>{      
      displayName: "C#",
      years: 7,
      projects: [CHRobinsonOnline, FreightQuote],
      summary:'',
    },
    [`${CSS_Modules}`]: <ToolDataDto>{
      displayName: "CSS Modules",
      years: .5,
      projects: [Portfolio],
      summary:'',
    },
    [`${CSS3}`]: <ToolDataDto>{
      displayName: "CSS3",
      years: 8.5,
      projects: [...ProjectNames],
      summary:'',
    },
    [`${Cypress}`]: <ToolDataDto>{
      displayName: "Cypress",
      years: .1,
      projects: [ConsoleUI],
      summary:'',
    },
    [`${Docker}`]: <ToolDataDto>{
      displayName: "Docker",
      years: 4,
      projects: [FreightQuote],
      summary:'',
    },
    [`${Dot_net_core}`]: <ToolDataDto>{
      displayName: "Docker",
      years: 4,
      projects: [FreightQuote, TMC],
      summary:'',
    },
    [`${Figma}`]: <ToolDataDto>{
      displayName: "Figma",
      years: 4,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${Git_bash}`]: <ToolDataDto>{
      displayName: "Git Bash",
      years: 7,
      projects: [...ProjectNames],
      summary:'',
    },
    [`${Github}`]: <ToolDataDto>{
      displayName: "Github",
      years: 7,
      projects: [...ProjectNames],
      summary:'',
    },
    [`${Google_analytics}`]: <ToolDataDto>{
      displayName: "Google Analytics",
      years: 4,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${HTML5}`]: <ToolDataDto>{
      displayName: "HTML 5",
      years: 8.5,
      projects: [...ProjectNames],
      summary:'',
    },
    [`${IT_accessibility}`]: <ToolDataDto>{
      displayName: "IT Accessibility",
      years: 8.5,
      projects: [...ProjectNames],
      summary:'',
    },
    [`${JavaScript}`]: <ToolDataDto>{
      displayName: "JavaScript",
      years: 8.5,
      projects: [...ProjectNames],
      summary:'',
    },
    [`${Jenkins}`]: <ToolDataDto>{
      displayName: "Jenkins",
      years: 4,
      projects: [FreightQuote, CHRobinsonOnline, TMC],
      summary:'',
    },
    [`${Jest}`]: <ToolDataDto>{
      displayName: "Jest",
      years: 5,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${Kafka}`]: <ToolDataDto>{
      displayName: "Kafka",
      years: 2,
      projects: [FreightQuote],
      summary:'',
    },
    [`${Kubernetes}`]: <ToolDataDto>{
      displayName: "Kubernetes",
      years: 3,
      projects: [FreightQuote],
      summary:'',
    },
    [`${Launchdarkly}`]: <ToolDataDto>{
      displayName: "LaunchDarkly",
      years: 4,
      projects: [FreightQuote],
      summary:'',
    },
    [`${Lerna}`]: <ToolDataDto>{
      displayName: "lerna",
      years: 1,
      projects: [ConsoleUI, Personal],
      summary:'',
    },
    [`${Linux}`]: <ToolDataDto>{
      displayName: "Linux",
      years: 4,
      projects: [FreightQuote, Portfolio, Personal],
      summary:'',
    },
    [`${Microsoft_azure}`]: <ToolDataDto>{
      displayName: "Microsoft Azure",
      years: 3,
      projects: [FreightQuote],
      summary:'',
    },
    [`${Mongodb}`]: <ToolDataDto>{
      displayName: "MongoDB",
      years: 2,
      projects: [FreightQuote],
      summary:'',
    },
    [`${MySql}`]: <ToolDataDto>{
      displayName: "MySql",
      years: 1,
      projects: [Personal],
      summary:'',
    },
    [`${Next_js}`]: <ToolDataDto>{
      displayName: "Next.js",
      years: 1,
      projects: [ConsoleUI, Portfolio],
      summary:'',
    },
    [`${Node_js}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 6,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio, TMC],
      summary:'',
    },
    [`${NPM}`]: <ToolDataDto>{
      displayName: "Figma",
      years: 8.5,
      projects: [...ProjectNames],
      summary:'',
    },
    [`${Oauth}`]: <ToolDataDto>{
      displayName: "Oauth",
      years: 5,
      projects: [FreightQuote, TMC, MarketplaceUI, DeveloperPortal],
      summary:'',
    },
    [`${OWASP}`]: <ToolDataDto>{
      displayName: "OWASP",
      years: 3,
      projects: [FreightQuote],
      summary:'',
    },
    [`${PlatformUI}`]: <ToolDataDto>{
      displayName: "Platform UI Libraries",
      years: 1.9,
      projects: [CustomerSignUpUI, MarketplaceUI, DeveloperPortal],
      summary:'',
    },
    [`${Powershell}`]: <ToolDataDto>{
      displayName: "Powershell",
      years: 3,
      projects: [TMC, FreightQuote],
      summary:'',
    },
    [`${Protractor}`]: <ToolDataDto>{
      displayName: "Protractor",
      years: 4,
      projects: [FreightQuote, TMC],
      summary:'',
    },
    [`${React_hook_form}`]: <ToolDataDto>{
      displayName: "React-hook-form",
      years: 6,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${React_query}`]: <ToolDataDto>{
      displayName: "React-Query.",
      years: 1,
      projects: [MarketplaceUI, CustomerSignUpUI],
      summary:'',
    },
    [`${React_testing_library}`]: <ToolDataDto>{
      displayName: "React Testing library",
      years: 3,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${React}`]: <ToolDataDto>{
      displayName: "React",
      years: 6,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal, Personal, Portfolio, TMC],
      summary:'',
    },
    [`${Redux}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 6,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${REST}`]: <ToolDataDto>{
      displayName: "REST",
      years: 6,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio, TMC],
      summary:'',
    },
    [`${Rollupjs}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 1.5,
      projects: [Personal],
      summary:'',
    },
    [`${S3}`]: <ToolDataDto>{
      displayName: "S3",
      years: 1.5,
      projects: [MarketplaceUI, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${Sass}`]: <ToolDataDto>{
      displayName: "SASS",
      years: 6,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal, Personal, Portfolio, TMC],
      summary:'',
    },
    [`${Storybook}`]: <ToolDataDto>{
      displayName: "Storybook",
      years: 1.9,
      projects: [Personal],
      summary:'',
    },
    [`${Sql_server}`]: <ToolDataDto>{
      displayName: "Sql Server",
      years: 7,
      projects: [FreightQuote, CHRobinsonOnline, TMC],
      summary:'',
    },
    [`${Styled_Components}`]: <ToolDataDto>{
      displayName: "Styled Components",
      years: 2,
      projects: [Personal],
      summary:'',
    },
    [`${Tailwindcss}`]: <ToolDataDto>{
      displayName: "Tailwindcss",
      years: 1.9,
      projects: [MarketplaceUI, CustomerSignUpUI, DeveloperPortal, Personal],
      summary:'',
    },
    [`${Terraform}`]: <ToolDataDto>{
      displayName: "Terraform",
      years: 2,
      projects: [FreightQuote],
      summary:'',
    },
    [`${TypeScript}`]: <ToolDataDto>{
      displayName: "Typescript",
      years: 6,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio, TMC],
      summary:'',
    },
    [`${Ubuntu}`]: <ToolDataDto>{
      displayName: "Ubuntu",
      years: .2,
      projects: [Portfolio],
      summary:'',
    },
    [`${VBNet}`]: <ToolDataDto>{
      displayName: "VB.Net",
      years: 3,
      projects: [CHRobinsonOnline, TMC],
      summary:'',
    },
    [`${Web_performance}`]: <ToolDataDto>{
      displayName: "Web Performance",
      years: 5,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio],
      summary:'',
    },
    [`${Webpack}`]: <ToolDataDto>{
      displayName: "Webpack",
      years: 3,
      projects: [FreightQuote, MarketplaceUI, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio],
      summary:'',
    },
    [`${Xml}`]: <ToolDataDto>{
      displayName: "XML",
      years: 5,
      projects: [FreightQuote, CHRobinsonOnline, TMC],
      summary:'',
    },
    [`${Yaml}`]: <ToolDataDto>{
      displayName: "Yaml",
      years: 1.9,
      projects: [MarketplaceUI, CustomerSignUpUI, DeveloperPortal, Personal, Portfolio],
      summary:'',
    },
}

