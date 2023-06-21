import {
    mobile,
    web,
    javascript,
    jquery,
    bootstrap,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    npm,
    es,
    ideal,
    relevel,
   vaageswari,
    hie,
    cryptocoins,
    youtube,
    amazon,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React  Developer",
      icon: mobile,
    },
    
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "ES",
      icon: es,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Jquery",
      icon: jquery,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
    {
      name: "git",
      icon: git,
    },
    {
      name: "npm",
      icon: npm,
    },
   
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Relevel by Unacademy",
      icon: relevel,
      iconBg: "#383E56",
      date: "August 2022 -May2023",
      points: [
        "I learn the frontend dependencies in the relevel like html, css, javascript and React/Redux frameworks.",
        "Collaborating with cross-functional members  developers to create high quality of products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in relevel contests and gave feedback to other developers.",
      ],
    },
    {
      title: "Computer Science",
      company_name: "vaageswari College Of Engineering ",
      icon: vaageswari,
      iconBg: "#E6DEDD",
      date: "2018 -  2022",
      points: [
        " Degree in Bachelor of Technology in Computer Science. ",
        "In four years of my journey i learn C, C++, data base management sysytems and such more things.",
        "Implemented minor and major projects in the final year.",
        "Participating in the cultural  and technical activities."
        
      ],
    },
    {
      title: "Intermediate(11&12th)",
      company_name: "Hyderabad Institute of Excellence (HIE) ",
      icon: hie,
      iconBg: "#383E56",
      date: "2016 -  2018",
      points: [
        "It is residential college with good environment.",
        "Developed many skills in that college.",
        "In this two years of journey I practices for the IIT entrance exam.",
        "Participated in Mathematical Olympiad and other competitions.",
      ],
    },
    {
      title: "SSC(10th)",
      company_name: "Ideal High School",
      icon: ideal,
      iconBg: "#E6DEDD",
      date: "2004 - 2016",
      points: [
        "For all the success in my life it is the root element.",
        "At the beginning level i started to learn the reading and understanding skills from my school.  ",
        "Enjoyed the school life with my friends and teachers. ",
        "Participated in quizzes and many more competitions at school level.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CryptoCoins",
      description:
        "Build Feature Rich Crypto Screener App with React JS and Tailwind CSS. This App is created with context API, react-router and Cryptocurrency APIs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "coingecko Apis",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: cryptocoins, 
      project_link: "https://cryptocoins11.netlify.app/",
      source_code_link: "https://github.com/MohammadShakeel303/Cryptocoins-A-web-Application",
    },
    {
      name: "Youtube",
      description:
        "A YouTube clone built using React and Rapid API, featuring a responsive design that adapts seamlessly to both mobile and desktop views.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      project_link: "https://youtube-shakeel.netlify.app/",
      source_code_link: "https://github.com/MohammadShakeel303/Youtube-clone",
    },
    {
      name: "Amazon E-commerce",
      description:
        "An e-commerce project built with React, incorporating a shopping cart feature to allow users to add and manage their selected items.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material-ui",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      project_link: "https://basic-amazon.netlify.app/",
      source_code_link: "https://github.com/MohammadShakeel303/Amazon-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };