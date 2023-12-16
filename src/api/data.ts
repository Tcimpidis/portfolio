import { ProjectDataDto, ToolDataDto } from "./models/data";

const CHRobinson = 'C.H Robinson worldwide';
const Delhivery = 'Delhivery';
const Tcimpidis = 'Tcimpidis';

export type CompanyType = typeof CHRobinson 
 | typeof Delhivery 
 | typeof Tcimpidis;

const PlatformUI = 'Platform UI';
const CustomerSignUpUI = 'Customer Sign up';
const CustomerMarketplace = 'Customer Marketplace';
const DeveloperPortal =  'Developer Portal';
const ConsoleUI = 'Console UI';
const FreightQuote =  'FreightQuote.com/book';
const CHRobinsonOnline =  'CHRobinson Online';
const Portfolio = 'Portfolio website';
const TMC = "TMC";
const Personal = 'Personal';

export type ProjectType = 
  typeof PlatformUI |
  typeof CustomerSignUpUI |
  typeof CustomerMarketplace |
  typeof DeveloperPortal |
  typeof FreightQuote |
  typeof CHRobinsonOnline |
  typeof Portfolio | 
  typeof TMC |
  typeof Personal | 
  typeof ConsoleUI;

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

export const CompanyNames = [
  CHRobinson,
  Delhivery
]

export const ProjectNames = [
  PlatformUI,
  CustomerSignUpUI,
  CustomerMarketplace,
  DeveloperPortal,
  FreightQuote,
  CHRobinsonOnline
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

export const ToolData : ToolMap = {
  [`${Agile}`]: <ToolDataDto>{
      displayName: "Agile Methodology",
      years: 8.5,
      projects: [PlatformUI, CustomerSignUpUI, CustomerMarketplace, DeveloperPortal, CHRobinsonOnline, FreightQuote],
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
      projects: [CustomerSignUpUI,CustomerMarketplace,DeveloperPortal],
      summary:'',
    },
    [`${Aws_cloudfront}`]: <ToolDataDto>{
      displayName: "Aws Cloudfront",
      years: 2.5,
      projects: [CustomerSignUpUI,CustomerMarketplace,DeveloperPortal],
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
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal],
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
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal],
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
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal],
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
      projects: [FreightQuote, PlatformUI, Portfolio, Personal],
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
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio, TMC],
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
      projects: [FreightQuote, TMC, PlatformUI, CustomerMarketplace, DeveloperPortal],
      summary:'',
    },
    [`${OWASP}`]: <ToolDataDto>{
      displayName: "OWASP",
      years: 3,
      projects: [FreightQuote],
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
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, PlatformUI],
      summary:'',
    },
    [`${React_query}`]: <ToolDataDto>{
      displayName: "React-Query.",
      years: 1,
      projects: [CustomerMarketplace, CustomerSignUpUI],
      summary:'',
    },
    [`${React_testing_library}`]: <ToolDataDto>{
      displayName: "React Testing library",
      years: 3,
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, PlatformUI],
      summary:'',
    },
    [`${React}`]: <ToolDataDto>{
      displayName: "React",
      years: 6,
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, Personal, Portfolio, TMC, PlatformUI],
      summary:'',
    },
    [`${Redux}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 6,
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${REST}`]: <ToolDataDto>{
      displayName: "REST",
      years: 6,
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio, TMC],
      summary:'',
    },
    [`${Rollupjs}`]: <ToolDataDto>{
      displayName: "Node.js",
      years: 1.5,
      projects: [PlatformUI, Personal],
      summary:'',
    },
    [`${S3}`]: <ToolDataDto>{
      displayName: "S3",
      years: 1.5,
      projects: [CustomerMarketplace, CustomerSignUpUI, DeveloperPortal],
      summary:'',
    },
    [`${Sass}`]: <ToolDataDto>{
      displayName: "SASS",
      years: 6,
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, Personal, Portfolio, TMC],
      summary:'',
    },
    [`${Storybook}`]: <ToolDataDto>{
      displayName: "Storybook",
      years: 1.9,
      projects: [PlatformUI, Personal],
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
      projects: [PlatformUI, Personal],
      summary:'',
    },
    [`${Tailwindcss}`]: <ToolDataDto>{
      displayName: "Tailwindcss",
      years: 1.9,
      projects: [CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, PlatformUI, Personal],
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
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio, TMC],
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
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio],
      summary:'',
    },
    [`${Webpack}`]: <ToolDataDto>{
      displayName: "Webpack",
      years: 3,
      projects: [FreightQuote, CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, CHRobinsonOnline, Personal, Portfolio],
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
      projects: [CustomerMarketplace, CustomerSignUpUI, DeveloperPortal, Personal, Portfolio],
      summary:'',
    },
}

export const ProjectData: ProjectMap ={
  [`${PlatformUI}`]: <ProjectDataDto>{
    title: "Platform UI",
    imageUrl: "",
    tech: [
      Agile, Rollupjs, TypeScript, Storybook, Styled_Components, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Webpack, Figma
    ],
    highlights: ""
  },
  [`${CustomerSignUpUI}`]: <ProjectDataDto>{
    title: "Customer Sign-up UI",
    imageUrl: "",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: ""
  },
  [`${CustomerMarketplace}`]: <ProjectDataDto>{
    title: "Marketplace UI",
    imageUrl: "",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: ""
  },
  [`${DeveloperPortal}`]: <ProjectDataDto>{
    title: "Developer Portal UI",
    imageUrl: "",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: ""
  },
  [`${ConsoleUI}`]: <ProjectDataDto>{
    title: "Console UI",
    imageUrl: "",
    tech: [
      Agile, TypeScript, Tailwindcss, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, S3, Google_analytics, HTML5, JavaScript, Node_js, Yaml, Aws_cloudfront, PlatformUI, Webpack, Figma
    ],
    highlights: ""
  },
  [`${FreightQuote}`]: <ProjectDataDto>{
    title: "FreightQuote by CHR",
    imageUrl: "",
    tech: [
      Agile, TypeScript, CSS3, Oauth, React, React_hook_form, Jest, Git_bash, Github, React_testing_library, REST, Google_analytics, HTML5, JavaScript, Node_js, Launchdarkly, CSharp, Docker, Dot_net_core, Figma, Terraform, OWASP, Sql_server
    ],
    highlights: ""
  },
  [`${CHRobinsonOnline}`]: <ProjectDataDto>{
    title: "CHRobinson Online",
    imageUrl: "",
    tech: [
      Agile, CSS3, REST, HTML5, JavaScript, CSharp, VBNet, Microsoft_azure, Sql_server, Xml
    ],
    highlights: ""
  },
  [`${TMC}`]: <ProjectDataDto>{
    title: "TMC a Division of C.H. Robinson ",
    imageUrl: "",
    tech: [
      Agile, CSS3, REST, HTML5, JavaScript, CSharp, VBNet, Microsoft_azure, React, Angular, Webpack, Sql_server, Xml, Microsoft_azure,
    ],
    highlights: ""
  },
  [`${Portfolio}`]: <ProjectDataDto>{
    title: "Tcimpidis.com",
    imageUrl: "",
    tech: [
      TypeScript, React, Jest, Git_bash, Github, React_testing_library, HTML5, JavaScript, Node_js, Yaml, Next_js, CSS_Modules, Apache, Ubuntu, Linux
    ],
  },
  [`${Personal}`]: <ProjectDataDto>{
    title: "Personal projects",
    imageUrl: "",
    tech: [
      TypeScript, React, Jest, Git_bash, Github, React_testing_library, HTML5, JavaScript, Node_js, Yaml, Next_js, CSS_Modules, Apache, Ubuntu, Linux
    ],
  }
}