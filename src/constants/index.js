import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    java,
    reactjs,
    tailwind,
    nodejs,
    mysql,
    git,
    spring,
    hybernate,
    aiiw,
    octanet,
    carrent,
    weatherforcast,
    voyage,
    threejs,
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
      id: "skills",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Programmer",
      icon: creator,
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Hybernate",
      icon: hybernate,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer Training",
      company_name: "AI-Innovation-World",
      icon: aiiw,
      iconBg: "#383E56",
      date: "Aug. 2023 - Oct. 2023",
      points: [
        "Completed comprehensive training in Full Stack Development, focusing on React.js for front-end and Spring Boot for back-end development.",
        "Gained hands-on experience in building RESTful APIs with Spring Boot, ensuring seamless communication between front-end and back-end components.",
        "Implemented state management in React applications using Redux, enhancing application performance and user experience."
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Octanet Services Pvt Ltd",
      icon: octanet,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
    
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Weather Forecast ",
      description:
        "A web application that provide current weather conditions and forecasts for a specific city using OpenWeatherMap API.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weatherforcast,
      source_code_link: "https://github.com/VIVEKCHANDRAVANSHI/WeatherForecastApp",
    },
    {
      name: "Voyage Travel",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstap",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: voyage,
      source_code_link: "https://github.com/VIVEKCHANDRAVANSHI/Voyage_travel",
    },
  ];
  
  export { services, technologies, experiences, projects };