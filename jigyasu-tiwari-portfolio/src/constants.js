// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import muit from './assets/education_logo/muit.png';
import lbic from './assets/education_logo/lbic.jpg';
import uplogo from './assets/education_logo/uplogo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/wordatlas.png';
import cmLogo from './assets/work_logo/login-signup.png';
import imagesearchLogo from './assets/work_logo/eil-sports-project.png';
import removebgLogo from './assets/work_logo/job-portal.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
    
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
     
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Telecommunications Consultants India Limited (TCIL)",
      date: "06-06-2024 – 31-07-2024 -June-July",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express Js",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Developerr",
      company: "Engineers India Limited (EIL) ",
      date: "11-6-2025 – 11-8-2025 - June-August",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript,Node , Express, MongoDB Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express Js",
        "Tailwind CSS",
        "MongoDb",
      ],
    },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: muit,
      school: "MUIT University, Noida",
      date: "August 2022 - July 2026",
      grade: "8.22 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science and Engineering from MUIT University, Noida. During my time at Muit, I gained a strong foundation in programming, software development. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MUIT University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor Of Technology - B.Tech",
    },

    {
      id: 2,
      img: lbic,
      school: "Moti Singh I C Saray Bhikhari,UP- Pratapgarh",
      date: "Apr 2021 - March 2022",
      grade: "78%",
      desc: "I completed my class 12 education from MSICSB,, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "(XII) - PCM- Physics, Chemistry & Maths ",
    },
    {
      id: 3,
      img: uplogo,
      school: "A N D H S S Narendra Nagar,UP - Pratapgarh",
      date: "Apr 2019 - March 2020",
      grade: "79%",
      desc: "I completed my class 10 education from A N D H S S Narendra Nagar School, Pratapgarh, under the UP board, where I studied Science.",
      degree: "(X), Science",
    },
  ];
  
  export const projects = [
    // {
    //   id: 0,
    //   title: "GitHub Profile Detective",
    //   description:
    //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    //   image: githubdetLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //   webapp: "https://githubprofiledetective.netlify.app/",
    // },
    // {
    //   id: 1,
    //   title: "CS Prep",
    //   description:
    //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    //   image: csprepLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/CSPrep",
    //   webapp: "https://csprep.netlify.app/",
    // },
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    {
      id: 5,
      title: "React Multi Pages",
     
      image: webverLogo,
      tags: ["React.js","Railwind css"],
      github: "https://github.com/JigyasuT/React-Multi_pages",
      webapp: "https://react-multi-pages-kappa.vercel.app/",
    },
    {
      id: 6,
      title: "Login/Signup",
      
      image: cmLogo,
      tags: ["React.js","Node.js","Express.js","MongoDB"],
      github: "https://github.com/JigyasuT/LastAuth",
      webapp: "https://last-auth-ui.vercel.app/login",
    },
    {
      id: 7,
      title: "EIL sports Scholarship website",
      image: imagesearchLogo,
      tags: ["React.js","Node.js","Express.js","MongoDB"],
      github: "https://github.com/Sports-scholarship-EIL1/Sports-scholarship1",
      webapp: "https://sports-scholarship-eil-internship.vercel.app/",
    },
    {
      id: 8,
      title: "Job Portal Website",
      image: removebgLogo,
      tags: ["React.js","Node.js","Express.js","MongoDB","Redux"],
      github: "https://github.com/JigyasuT/job-website",
      webapp: "https://job-website-4mcv.onrender.com/",
    },
  ];  