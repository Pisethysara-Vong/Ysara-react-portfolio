interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  websiteLink: string;
  githubLink: string
}

interface Contact {
  telegram: string;
  phoneNo: string;
  email: string;
}


import cafePlain from "../assets/projects/cafe plain.png";
import joubJum from "../assets/projects/joub jum.png";
import youtubeLimiter from "../assets/projects/youtube limiter.png";
import portfolioWebsite from "../assets/projects/portfolio.png";
import canalStreetMarket from "../assets/projects/Canal Street.png";



export const HERO_CONTENT: string = `I am a 19 years old, 3rd year student attending American University of Phnom Penh. I've always been mesmerized by the process of creation ever since I was a kid which has lead me to pursue Software Development as a career.`;

export const ABOUT_TEXT: string = `I am a frontend developer who likes to create efficient and user-friendly web applications. I have worked with a variety of technologies, including React, TypeScript, JavaScript, HTML, Tailwind CSS, Figma, Git & GitHub. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES: Experience[] = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Canal Street Market",
    image: canalStreetMarket,
    description:
      "A website that showcase the Canal Street Market, a vibrant marketplace in New York City, featuring food vendors, retail shops, and community events.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer Motion", "TypeScript"],
    websiteLink: "https://canal-street-market-website.vercel.app/",
    githubLink: "https://github.com/Pisethysara-Vong/Canal-Street-Market-website"
  },
  {
    title: "Cafe Plain",
    image: cafePlain,
    description:
      "A fully functional cafe shop website with features like menu browsing, ordering, shopping cart, receipts, history, reservations and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    websiteLink: "https://cafe-plain.vercel.app/",
    githubLink: "https://github.com/Pisethysara-Vong/Cafe-Plain"
  },
  {
    title: "JoubJum Mobile App",
    image: joubJum,
    description:
      "An application for setting up hangouts or meetings with friends or other people, with features such as displaying location details, searching for locations, showing direction, setting up meeting place, and user authentication.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    websiteLink: "#",
    githubLink: "https://github.com/Pisethysara-Vong/Joub_Jum"
  },
  {
    title: "Youtube Time Limiter",
    image: youtubeLimiter,
    description:
      "A Chrome extenstion that limits access to Youtube with a countdown timer then asks the user to complete a general knowledge quiz to regain access.",
    technologies: ["HTML", "CSS", "JavaScript"],
    websiteLink: "https://chromewebstore.google.com/detail/youtube-time-limiter/ilgfjodcifokdplbcpbdelcbjhapicdl",
    githubLink: "https://github.com/Pisethysara-Vong/Youtube-Time-Limiter"
  },
  {
    title: "Porfolio Website",
    image: portfolioWebsite,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React"],
    websiteLink: "https://www.ysara.site/",
    githubLink: "https://github.com/Pisethysara-Vong/Ysara-react-portfolio"
  },
];

export const CONTACT: Contact = {
  telegram: "@Vong_Pisedhysara",
  phoneNo: "+855 85 532 078",
  email: "pisethysaravong@gmail.com",
};