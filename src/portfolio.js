// Summary And Greeting Section
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Abraham Fong",
  title: "Hello, I'm Abraham.",
  subTitle_1: emoji("A Software Developer with a positive problem solving mentality. 👨🏻‍💻"),
  subTitle_2: emoji("I have experience building web applications, RESTful APIs, & serverless microservices using Golang / Python / PHP / JavaScript / NodeJS and other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1xa9BlP1CHPCfmgWx10ahZmWUJXW4_GEo/view?usp=sharing"
};

const socialMediaLinks = {
  github: "https://github.com/abefong54",
  linkedin: "https://www.linkedin.com/in/abefong-dev/",
  gmail: "abefong54@gmail.com",
  gitlab: "https://gitlab.com/abefong54",
};


// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "OPTIMISTIC SOFTWARE ENGINEER THAT LIKES TO DEVELOP MODERN TECH SOLUTIONS FOR MODERN PROBLEMS",
  skills: [
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Highly available REST API services for web and mobile applications"),
    emoji("⚡ Serverless microservices on AWS Lambda"),
    emoji("⚡ System data analysis and business intelligence")
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      level: "Frontend",
      technology: "Javascript, Angularjs, Reactjs",
      projects: "Software Recommendations Graph / Parlevel Systems Warehouse Module / Abraham Fong Developer Portfolio / Gyde App",
      colorlogo: require("./assets/images/frontend-icon.jpeg"),
    },
    {
      level: "Backend",
      technology: "Golang, Python, PHP/Laravel, NodeJS, Java",
      projects: "ServiceNow Change Automation / SSL Certificate Discovery Script / Spring Restful API / Parlevel Systems Warehouse module / DigitalBeef Registry Portal",
      colorlogo:  require("./assets/images/backend-icon.png"),

    },
    {
      level: "Database / DevOps",
      technology: "SQL, NoSQL, Neo4J, Cloud Database, Docker, ECS / S3",
      projects: "Parlevel Systems Warehouse Module / DigitalBeef Registry Portal / Software Recommendations Graph / Gyde App",
      colorlogo:  require("./assets/images/database-icon.png"),
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, and Some Cool Blog Posts about Cool Stuff that I have done !",
  achievementCards: [
    {
      title: "\"SmartGlove\" 1st Place Rowdyhacks 2019 ",
      subtitle: "First place winning team during Major League Hacking event hosted by UTSA.",
      image:
        require("./assets/images/rowdyhacks.png"),
      footerLink: [
        { name: "Video Demo", url: "https://www.youtube.com/watch?v=7ovhadL1NXk" },
        { name: "Blog post", url: "https://tech.iheartmediacareers.com/blog/rowdyhacks-and-iheartmedia-tech" },
      ]
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Cloud fluency with foundational understanding of IT services and their uses in the AWS Cloud.",
      image: 
        require("./assets/images/aws_practitioner.png"),
      footerLink: [
        { name: "View Certification", url: "https://www.youracclaim.com/badges/5ff146c0-d4af-40b3-b1ac-4dd69894bd1a/linked_in_profile" }]
    },

    {
      title: "\"Tacos Rule\" 3rd Place Texas A&M Datathon",
      subtitle: "Jupyter notebook for Goldman Sachs' Taco and Burrito Data Challenge",
      image: 
        require("./assets/images/tamudatathon.png"),
      footerLink: [
        { name: "Jupyter Notebook", url: "https://gitlab.com/abefong54/tamudatathon-tacosrule/-/tree/master" }
      ]
    }
  ]
};

// Top 3 work experiences
const workExperiences = {
  title: "Projects and Experience ",
  subtitle: "Some of the projects that I've worked on and the company I worked with",
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",  
      company: "The Walt Disney Company",
      companylogo:  require("./assets/images/disneyCompanyLogo.jpg"),
      date: "January 2020 - April 2020",
      desc: "Worked on tasks related to automation and site reliability engineering."
    },
    {
      role: "Software Engineer Intern",  
      company: "Charles Schwab Company",
      companylogo:  require("./assets/images/charlesSchwabCompanyLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Full-Stack Software Engineer",  
      company: "Parlevel System",
      companylogo: require("./assets/images/parlevelLogo.png"),
      date: "October 2017 – April 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects and Experience",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image:  require("./assets/images/disneyCompanyLogo.jpg"),
      link: "https://dpep.disney.com/"
    },
    {
      image: require("./assets/images/parlevelLogo.png"),
      link: "http://parlevelsystems.com/"
    },
    {
      image:  require("./assets/images/charlesSchwabCompanyLogo.png"),
      link: "https://www.schwab.com/mobile"
    },
    {
      image:  require("./assets/images/digitalBeef.png"),
      link: "https://www.digitalbeef.com/"
    },
    {
      image:  require("./assets/images/tceq.png"),
      link: "https://www.tceq.texas.gov/drinkingwater"
    },
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi?",
  subtitle_2: "Just shoot me an e-mail or lets connect on LinkedIn!",
  email_address: "abefong54@gmail.com"
};

export {greeting, socialMediaLinks, skillsSection, techStack, workExperiences, achievementSection, bigProjects, contactInfo};